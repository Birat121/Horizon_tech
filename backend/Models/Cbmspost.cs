using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Cbmspost
{
    public decimal TransId { get; set; }

    public string InvNo { get; set; } = null!;

    public int PostSts { get; set; }

    public DateTime? IsRealTime { get; set; }

    public DateTime EntryDate { get; set; }

    public string? EntryBy { get; set; }
}
