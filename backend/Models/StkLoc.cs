using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class StkLoc
{
    public decimal TransId { get; set; }

    public string BrNo { get; set; } = null!;

    public string LocId { get; set; } = null!;

    public string LocName { get; set; } = null!;

    public string EntBy { get; set; } = null!;

    public string EntPc { get; set; } = null!;

    public DateTime EntDate { get; set; }

    public string? IsDel { get; set; }
}
