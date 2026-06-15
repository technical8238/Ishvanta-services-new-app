# Backend API Foundation

This folder contains the .NET 10 Web API foundation for the Ishavanta One Call Service enterprise site.

## Included
- Clean architecture-aligned folder structure
- REST API versioning
- Serilog logging
- Swagger/OpenAPI
- FluentValidation
- AutoMapper + EF Core + SQL Server-ready setup
- Exception handling middleware

## Next steps
1. Run `dotnet restore` and `dotnet run --project backend/src/Ishavanta.Api/Ishavanta.Api.csproj`.
2. Configure your SQL Server connection string in `backend/src/Ishavanta.Api/appsettings.json`.
3. Add EF Core migrations and full entity/domain modules for Users, Roles, Permissions, Blogs, Careers, Portfolios, and Contact inquiries.


