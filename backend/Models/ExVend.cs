using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class ExVend
{
    public decimal TransId { get; set; }

    public string? Acg { get; set; }

    public string? Acn { get; set; }

    public string? Add1 { get; set; }

    public string? PhoneNo { get; set; }

    public string? MobileNo { get; set; }

    public string? PanNo { get; set; }

    public string? ContactP { get; set; }

    public string? FilePath { get; set; }

    public DateTime? EntSoftDate { get; set; }

    public DateTime EntSysDate { get; set; }
}
