using Asp.Versioning;
using Ishavanta.Api.Models;
using Ishavanta.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace Ishavanta.Api.Controllers;

[ApiController]
[ApiVersion("1.0")]
[Route("api/v{version:apiVersion}/site")]
public class SiteController : ControllerBase
{
    private readonly ICompanyService _companyService;

    public SiteController(ICompanyService companyService)
    {
        _companyService = companyService;
    }

    [HttpGet]
    public async Task<ActionResult<IReadOnlyList<SiteContentDto>>> Get(CancellationToken ct)
    {
        return Ok(await _companyService.GetSiteContentAsync(ct));
    }

    [HttpPost]
    public async Task<ActionResult<SiteContentDto>> Create([FromBody] CreateSiteContentRequest request, CancellationToken ct)
    {
        return CreatedAtAction(nameof(Get), await _companyService.CreateSiteContentAsync(request, ct));
    }
}


