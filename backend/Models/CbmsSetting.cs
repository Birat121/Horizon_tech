using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class CbmsSetting
{
    public decimal TransId { get; set; }

    public string RealTime { get; set; } = null!;

    public DateTime SchedulerStartFrom { get; set; }

    public DateTime LastUpdate { get; set; }

    public string UpdateBy { get; set; } = null!;

    public string Uid { get; set; } = null!;

    public string Pwd { get; set; } = null!;

    public string Uri { get; set; } = null!;
}
