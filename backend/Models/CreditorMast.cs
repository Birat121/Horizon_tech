using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class CreditorMast
{
    public decimal TransId { get; set; }

    public string? CreditorId { get; set; }

    public string? CreditorName { get; set; }

    public string? EntryBy { get; set; }

    public DateTime? EntryDate { get; set; }

    public string? ModifyBy { get; set; }

    public DateTime? ModifyDate { get; set; }
}
