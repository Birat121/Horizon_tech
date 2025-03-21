using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class IbossSaleSum
{
    public decimal TransId { get; set; }

    public string RecordId { get; set; } = null!;

    public string CustomerName { get; set; } = null!;

    public string? CustomerEmail { get; set; }

    public string? CustomerMob { get; set; }

    public string? CustomerPhone { get; set; }

    public string? CustomerAddress { get; set; }

    public string? CustomerPan { get; set; }

    public string SalesDate { get; set; } = null!;

    public string SalesAmount { get; set; } = null!;

    public string PaymentMode { get; set; } = null!;

    public string? InvNo { get; set; }

    public string? EntBy { get; set; }

    public string? EntPc { get; set; }

    public DateTime EntDate { get; set; }

    public string? IsDel { get; set; }
}
