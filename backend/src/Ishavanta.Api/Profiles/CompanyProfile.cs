using AutoMapper;
using Ishavanta.Api.Data;
using Ishavanta.Api.Models;

namespace Ishavanta.Api.Profiles;

public class CompanyProfile : Profile
{
    public CompanyProfile()
    {
        CreateMap<SiteContent, SiteContentDto>();
        CreateMap<CreateSiteContentRequest, SiteContent>();
    }
}


