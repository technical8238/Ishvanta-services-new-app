namespace Ishavanta.Api.Models;

public record SiteContentDto(int Id, string Title, string Summary, string Category, DateTime CreatedAt);

public record CreateSiteContentRequest(string Title, string Summary, string Category);


