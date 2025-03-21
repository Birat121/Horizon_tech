using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class ServiceI
{
    public decimal TransId { get; set; }

    public string Itemcode { get; set; } = null!;

    public string Description { get; set; } = null!;

    public decimal Rt { get; set; }

    public string EnteredBy { get; set; } = null!;

    public string EnteredSys { get; set; } = null!;

    public DateTime EnteredDate { get; set; }

    public string? Hscode { get; set; }
}
