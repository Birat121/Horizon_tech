using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class DmgG
{
    public decimal TransId { get; set; }

    public DateTime TransDate { get; set; }

    public string TransNo { get; set; } = null!;

    public string Pid { get; set; } = null!;

    public decimal AvlQ { get; set; }

    public decimal? Qty { get; set; }

    public decimal Rate { get; set; }

    public decimal TAmt { get; set; }

    public DateTime EntDate { get; set; }

    public string EntBy { get; set; } = null!;

    public string? EntPc { get; set; }

    public string? IsDel { get; set; }

    public string? BranchId { get; set; }

    public string? LocId { get; set; }

    public string? BatchId { get; set; }
}
