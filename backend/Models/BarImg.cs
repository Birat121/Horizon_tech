using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class BarImg
{
    public decimal TransId { get; set; }

    public string PartyName { get; set; } = null!;

    public string Pid { get; set; } = null!;

    public string ItemDesc { get; set; } = null!;

    public decimal Rate { get; set; }

    public byte[] Ph { get; set; } = null!;

    public string? MfgDt { get; set; }

    public string? ExpDt { get; set; }
}
