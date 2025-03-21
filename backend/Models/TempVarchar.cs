using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class TempVarchar
{
    public decimal TransId { get; set; }

    public string? ProductId { get; set; }

    public decimal? UnitRate { get; set; }

    public decimal? PackCost { get; set; }
}
