using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Jvn
{
    public decimal TransId { get; set; }

    public DateTime? TransDate { get; set; }

    public string? Fname { get; set; }

    public string? VoucherRef { get; set; }

    public decimal? RefSubCat { get; set; }

    public string? DocNo { get; set; }

    public string? Acc { get; set; }

    public decimal? Dr { get; set; }

    public decimal? Cr { get; set; }

    public string? ChqNo { get; set; }

    public decimal? Rate { get; set; }

    public decimal? Qty { get; set; }

    public string? Narration { get; set; }

    public string? EntryBy { get; set; }

    public string? Computer { get; set; }

    public string? ModifyBy { get; set; }

    public string? ModifySys { get; set; }

    public DateTime? ModifyDate { get; set; }

    public string? Capture { get; set; }

    public string? OpAc { get; set; }

    public string? Prj { get; set; }

    public DateTime EnteredDate { get; set; }

    public string? IsDs { get; set; }

    public decimal? OnlTransId { get; set; }

    public string? SubLedId { get; set; }

    public string? Rmk { get; set; }

    public DateTime? PartyBillDt { get; set; }

    public decimal DrFyc { get; set; }

    public decimal CrFyc { get; set; }

    public string? CurrName { get; set; }

    public decimal ExcRate { get; set; }

    public decimal FycAmt { get; set; }
}
