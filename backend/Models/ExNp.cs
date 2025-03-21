using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class ExNp
{
    public decimal TransId { get; set; }

    public string CusId { get; set; } = null!;

    public string Lkey { get; set; } = null!;

    public string Enp { get; set; } = null!;

    public string Esms { get; set; } = null!;

    public string? IsDel { get; set; }

    public DateTime Ludt { get; set; }
}
