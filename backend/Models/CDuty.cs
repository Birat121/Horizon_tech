using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class CDuty
{
    public decimal TransId { get; set; }

    public DateTime TransDate { get; set; }

    public string? Acc { get; set; }

    public string Acn { get; set; } = null!;

    public string SAcn { get; set; } = null!;

    public string AcType { get; set; } = null!;

    public string AddLess { get; set; } = null!;

    public string Vatable { get; set; } = null!;

    public string CStatus { get; set; } = null!;

    public int Sno { get; set; }

    public string? EntryBy { get; set; }

    public DateTime EntryDate { get; set; }

    public string? ModifyBy { get; set; }

    public DateTime? ModifyDate { get; set; }
}
