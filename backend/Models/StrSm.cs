using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class StrSm
{
    public decimal TransId { get; set; }

    public string TransNo { get; set; } = null!;

    public string SSms { get; set; } = null!;

    public string CAct { get; set; } = null!;

    public DateTime ImpDt { get; set; }

    public string? IsDel { get; set; }

    public DateTime? DelDt { get; set; }
}
