using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class BatchMast
{
    public decimal TransId { get; set; }

    public string BranchId { get; set; } = null!;

    public string BatchId { get; set; } = null!;

    public string Pid { get; set; } = null!;

    public string BatchNo { get; set; } = null!;

    public DateTime MfgDt { get; set; }

    public DateTime ExpDt { get; set; }

    public string? EnteredBy { get; set; }

    public string? EnteredSys { get; set; }

    public DateTime EnteredDate { get; set; }

    public string? EditedBy { get; set; }

    public string? EditedSys { get; set; }

    public DateTime? EditedDate { get; set; }

    public decimal Mrp { get; set; }

    public decimal Tp { get; set; }
}
