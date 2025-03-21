using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class NepEng
{
    public decimal TransId { get; set; }

    public string NepaliDate { get; set; } = null!;

    public DateTime EngDate { get; set; }

    public string? Remarks { get; set; }

    public string Np { get; set; } = null!;
}
