using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class CountSet
{
    public decimal TransId { get; set; }

    public int CountNo { get; set; }

    public string Pcname { get; set; } = null!;

    public string MacId { get; set; } = null!;

    public DateTime SettingDate { get; set; }

    public string? IsDel { get; set; }
}
