using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class BrId
{
    public decimal TransId { get; set; }

    public string PartyBrId { get; set; } = null!;

    public DateTime EnteredDate { get; set; }
}
