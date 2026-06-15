using FluentValidation;
using Ishavanta.Api.Models;

namespace Ishavanta.Api.Validators;

public class CreateSiteContentRequestValidator : AbstractValidator<CreateSiteContentRequest>
{
    public CreateSiteContentRequestValidator()
    {
        RuleFor(x => x.Title).NotEmpty().MaximumLength(120);
        RuleFor(x => x.Summary).NotEmpty().MaximumLength(500);
        RuleFor(x => x.Category).NotEmpty().MaximumLength(60);
    }
}


