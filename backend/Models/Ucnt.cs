using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Ucnt
{
    public decimal TransId { get; set; }

    public string PcName { get; set; } = null!;

    public string MacId { get; set; } = null!;

    public DateTime Ludt { get; set; }
}
