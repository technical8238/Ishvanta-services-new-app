using Ishavanta.Api.Data;
using Ishavanta.Api.Models;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace Ishavanta.Api.Services;

public interface ICompanyService
{
    Task<IReadOnlyList<SiteContentDto>> GetSiteContentAsync(CancellationToken ct);
    Task<SiteContentDto> CreateSiteContentAsync(CreateSiteContentRequest request, CancellationToken ct);
}

public class CompanyService : ICompanyService
{
    private readonly ApplicationDbContext _db;
    private readonly IMapper _mapper;

    public CompanyService(ApplicationDbContext db, IMapper mapper)
    {
        _db = db;
        _mapper = mapper;
    }

    public async Task<IReadOnlyList<SiteContentDto>> GetSiteContentAsync(CancellationToken ct)
    {
        var items = await _db.SiteContent.AsNoTracking().OrderByDescending(x => x.CreatedAt).ToListAsync(ct);
        return _mapper.Map<IReadOnlyList<SiteContentDto>>(items);
    }

    public async Task<SiteContentDto> CreateSiteContentAsync(CreateSiteContentRequest request, CancellationToken ct)
    {
        var entity = _mapper.Map<SiteContent>(request);
        _db.SiteContent.Add(entity);
        await _db.SaveChangesAsync(ct);
        return _mapper.Map<SiteContentDto>(entity);
    }
}


