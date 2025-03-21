using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class PriceC
{
    public decimal TransId { get; set; }

    public DateTime TransDate { get; set; }

    public string TransNo { get; set; } = null!;

    public string Pid { get; set; } = null!;

    public decimal AvlQ { get; set; }

    public decimal Orate { get; set; }

    public decimal NRate { get; set; }

    public DateTime EntDate { get; set; }

    public string EntBy { get; set; } = null!;

    public string? EntPc { get; set; }

    public string? IsDel { get; set; }
}
