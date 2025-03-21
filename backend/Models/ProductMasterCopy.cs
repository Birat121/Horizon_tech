using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class ProductMasterCopy
{
    public decimal TransId { get; set; }

    public string CatId { get; set; } = null!;

    public string SubCatId { get; set; } = null!;

    public string ProductId { get; set; } = null!;

    public string ProductName { get; set; } = null!;

    public string? Desc1 { get; set; }

    public string Uom { get; set; } = null!;

    public decimal Uomqty { get; set; }

    public decimal? WeightQty { get; set; }

    public decimal UnitRate { get; set; }

    public decimal SaleRate { get; set; }

    public decimal WholeSalePcs { get; set; }

    public decimal VatRate { get; set; }

    public int? Reorder { get; set; }

    public decimal? AvrCost { get; set; }

    public string EntBy { get; set; } = null!;

    public string EntPc { get; set; } = null!;

    public DateTime EntDate { get; set; }

    public DateTime ModDate { get; set; }
}
