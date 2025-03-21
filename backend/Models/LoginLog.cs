using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class LoginLog
{
    public decimal TransId { get; set; }

    public string UserName { get; set; } = null!;

    public DateTime? LoginDate { get; set; }

    public string? ComputerName { get; set; }

    public string? LoginTime { get; set; }

    public string? LoginStatus { get; set; }
}
