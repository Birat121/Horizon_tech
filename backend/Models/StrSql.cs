using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class StrSql
{
    public decimal TransId { get; set; }

    public string TransNo { get; set; } = null!;

    public string SqlCmd { get; set; } = null!;

    public DateTime ImpDt { get; set; }

    public string? IsExc { get; set; }

    public DateTime? ExcDt { get; set; }

    public string? IsDel { get; set; }
}
