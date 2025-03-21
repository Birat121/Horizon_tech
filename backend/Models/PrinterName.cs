using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class PrinterName
{
    public decimal TransId { get; set; }

    public string? Posprinter { get; set; }

    public string? Kotprinter { get; set; }

    public string? Botprinter { get; set; }

    public DateTime? SettingDate { get; set; }

    public string? EntryBy { get; set; }
}
