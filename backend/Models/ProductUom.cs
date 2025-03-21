using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class ProductUom
{
    public decimal TransId { get; set; }

    public string? ProductId { get; set; }

    public string? Barcode { get; set; }

    public string? Uom { get; set; }

    public decimal? Uomqty { get; set; }

    public decimal? UnitRate { get; set; }

    public decimal? UnitSale { get; set; }

    public decimal? DiscAmt { get; set; }

    public decimal? NetSale { get; set; }

    public decimal? Ws { get; set; }

    public decimal? AvrCost { get; set; }

    public string? EntryBy { get; set; }

    public DateTime? EntryDate { get; set; }

    public string? ModifyBy { get; set; }

    public DateTime? ModifyDate { get; set; }

    public string? IsDel { get; set; }
}
