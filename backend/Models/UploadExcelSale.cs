using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class UploadExcelSale
{
    public decimal TransId { get; set; }

    public DateTime TransDt { get; set; }

    public string VRef { get; set; } = null!;

    public string WeekN { get; set; } = null!;

    public string ExcelPath { get; set; } = null!;

    public string CusId { get; set; } = null!;

    public string CusN { get; set; } = null!;

    public string Add1 { get; set; } = null!;

    public string PanNo { get; set; } = null!;

    public string ItemDesc { get; set; } = null!;

    public decimal Qty { get; set; }

    public decimal Fare { get; set; }

    public decimal OthChr { get; set; }

    public decimal TSales { get; set; }

    public decimal Taxable { get; set; }

    public decimal NonTax { get; set; }

    public decimal VatA { get; set; }

    public decimal Gt { get; set; }

    public string EmailId { get; set; } = null!;

    public string? EntBy { get; set; }

    public string? EntPc { get; set; }

    public DateTime EntDate { get; set; }

    public string? IsDel { get; set; }

    public string? InvNo { get; set; }
}
