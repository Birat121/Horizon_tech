using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class PointC
{
    public decimal TransId { get; set; }

    public DateTime TransDate { get; set; }

    public string TransNo { get; set; } = null!;

    public string Pid { get; set; } = null!;

    public decimal Qty { get; set; }

    public decimal Pnt { get; set; }

    public DateTime EntDate { get; set; }

    public string EntBy { get; set; } = null!;

    public string? EntPc { get; set; }

    public string? IsDel { get; set; }
}
