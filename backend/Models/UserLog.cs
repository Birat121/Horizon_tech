using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class UserLog
{
    public decimal TransId { get; set; }

    public DateTime TransDate { get; set; }

    public string TransNo { get; set; } = null!;

    public string Fname { get; set; } = null!;

    public string? EnteredBy { get; set; }

    public DateTime? EnteredDate { get; set; }

    public string? EditedBy { get; set; }

    public DateTime? EditedDate { get; set; }

    public string? Iaction { get; set; }

    public string? MyDesc { get; set; }
}
