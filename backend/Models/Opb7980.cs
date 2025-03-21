using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Opb7980
{
    public decimal TransId { get; set; }

    public string? Acc { get; set; }

    public decimal? Dr { get; set; }

    public decimal? Cr { get; set; }

    public decimal? Bal { get; set; }

    public string? Prj { get; set; }

    public string? ClosingBy { get; set; }

    public DateTime? ClosingDate { get; set; }

    public string? Remarks { get; set; }
}
