using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class ProdCtrl
{
    public decimal TransId { get; set; }

    public string ProdId { get; set; } = null!;

    public string ConsId { get; set; } = null!;

    public decimal ProdQty { get; set; }

    public decimal ConsQty { get; set; }

    public string PUom { get; set; } = null!;

    public string CUom { get; set; } = null!;

    public decimal PUomqty { get; set; }

    public decimal CUomqty { get; set; }

    public string CStatus { get; set; } = null!;

    public DateTime EntryDate { get; set; }

    public string? EntryBy { get; set; }
}
