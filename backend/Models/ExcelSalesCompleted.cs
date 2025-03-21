using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class ExcelSalesCompleted
{
    public decimal TransId { get; set; }

    public string UploadId { get; set; } = null!;

    public DateTime SalesDate { get; set; }

    public string? EntBy { get; set; }

    public string? EntPc { get; set; }

    public DateTime EntDate { get; set; }

    public string? IsDel { get; set; }
}
