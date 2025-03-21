using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class UomMast
{
    public decimal TransId { get; set; }

    public string? UomDesc { get; set; }

    public decimal? UomQty { get; set; }

    public string? EntryBy { get; set; }

    public DateTime? EntryDate { get; set; }

    public string? ModifyBy { get; set; }

    public DateTime? ModifyDate { get; set; }
}
