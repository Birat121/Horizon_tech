using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class CusFetEnableDisable
{
    public decimal TransId { get; set; }

    public string MacId { get; set; } = null!;

    public string? IsAccess { get; set; }

    public DateTime EntDt { get; set; }

    public string? EntBy { get; set; }

    public string? EntPc { get; set; }
}
