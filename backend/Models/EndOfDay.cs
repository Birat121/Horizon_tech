using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class EndOfDay
{
    public decimal TransId { get; set; }

    public DateTime StartOfDay { get; set; }

    public DateTime? EndOfDay1 { get; set; }

    public string? StartOfProcess { get; set; }

    public string? EndOfProcess { get; set; }
}
