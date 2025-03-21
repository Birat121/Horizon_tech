using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class ExPdInfo
{
    public decimal TransId { get; set; }

    public string? CatName { get; set; }

    public string? SubCat { get; set; }

    public string? Uom { get; set; }

    public string? ProductName { get; set; }

    public decimal? UnitRate { get; set; }

    public decimal? UnitSale { get; set; }

    public decimal? Ws { get; set; }

    public DateTime? EntSoftDate { get; set; }

    public DateTime EntSysDate { get; set; }
}
