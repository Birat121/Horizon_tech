using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class BillPrintRecord
{
    public decimal TransId { get; set; }

    public string BillNo { get; set; } = null!;

    public DateTime BillDate { get; set; }

    public DateTime PrintDate { get; set; }

    public string PrintBy { get; set; } = null!;
}
