using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class SubCategoryMast
{
    public decimal TransId { get; set; }

    public string? CatId { get; set; }

    public string? SubCatId { get; set; }

    public string? SubCatName { get; set; }

    public decimal? VatRate { get; set; }

    public string? EntryBy { get; set; }

    public DateTime? EntryDate { get; set; }

    public string? ModifyBy { get; set; }

    public DateTime? ModifyDate { get; set; }
}
