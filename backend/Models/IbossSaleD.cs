using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class IbossSaleD
{
    public decimal TransId { get; set; }

    public string RecordId { get; set; } = null!;

    public string? Category { get; set; }

    public string? SubCategory { get; set; }

    public string ItemName { get; set; } = null!;

    public string UnitPrice { get; set; } = null!;

    public string UnitTax { get; set; } = null!;

    public string Quantity { get; set; } = null!;

    public string Amount { get; set; } = null!;

    public string? EntBy { get; set; }

    public string? EntPc { get; set; }

    public DateTime EntDate { get; set; }

    public string? IsDel { get; set; }
}
