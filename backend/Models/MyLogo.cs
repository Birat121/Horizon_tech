using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class MyLogo
{
    public decimal TransId { get; set; }

    public DateTime? TransDate { get; set; }

    public byte[] Ph { get; set; } = null!;

    public string? EnteredBy { get; set; }

    public string? EnteredSys { get; set; }

    public DateTime EnteredDate { get; set; }

    public string? EditedBy { get; set; }

    public string? EditedSys { get; set; }

    public DateTime EditedDate { get; set; }
}
