using FluentValidation;
using FluentValidation.AspNetCore;
using Ishavanta.Api.Data;
using Ishavanta.Api.Middleware;
using Ishavanta.Api.Models;
using Ishavanta.Api.Services;
using Ishavanta.Api.Validators;
using Microsoft.EntityFrameworkCore;
using Serilog;

var builder = WebApplication.CreateBuilder(args);

Log.Logger = new LoggerConfiguration()
    .ReadFrom.Configuration(builder.Configuration)
    .Enrich.FromLogContext()
    .WriteTo.Console()
    .CreateLogger();

builder.Host.UseSerilog();

builder.Services.AddControllers();
builder.Services.AddProblemDetails();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddApiVersioning(options => { options.ReportApiVersions = true; options.AssumeDefaultVersionWhenUnspecified = true; });
builder.Services.AddFluentValidationAutoValidation();
builder.Services.AddScoped<IValidator<CreateSiteContentRequest>, CreateSiteContentRequestValidator>();
builder.Services.AddAutoMapper(typeof(Program));
builder.Services.AddScoped<ICompanyService, CompanyService>();
builder.Services.AddScoped<ExceptionHandlingMiddleware>();
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

app.UseMiddleware<ExceptionHandlingMiddleware>();
app.UseSwagger();
app.UseSwaggerUI();
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    db.Database.EnsureCreated();
}

app.Run();


