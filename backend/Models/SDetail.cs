using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class SDetail
{
    public decimal TransId { get; set; }

    public string UserName { get; set; } = null!;

    public DateTime? LogDate { get; set; }

    public string? Computer { get; set; }

    public string? LogTime { get; set; }
}
