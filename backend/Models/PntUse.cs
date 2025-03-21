using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class PntUse
{
    public decimal TransId { get; set; }

    public DateTime TransDate { get; set; }

    public string TransNo { get; set; } = null!;

    public string CusId { get; set; } = null!;

    public decimal AvlPnt { get; set; }

    public decimal UsePnt { get; set; }

    public DateTime EntDate { get; set; }

    public string EntBy { get; set; } = null!;

    public string? EntPc { get; set; }
}
