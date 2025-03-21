using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Pdcentry
{
    public decimal TransId { get; set; }

    public string TransNo { get; set; } = null!;

    public DateTime TrDt { get; set; }

    public string RefNo { get; set; } = null!;

    public string CusId { get; set; } = null!;

    public string ChqNo { get; set; } = null!;

    public DateTime ChqDate { get; set; }

    public string BankName { get; set; } = null!;

    public string BankBrName { get; set; } = null!;

    public decimal ChqAmt { get; set; }

    public string AccountNo { get; set; } = null!;

    public string BeneficaryName { get; set; } = null!;

    public string DepositBankName { get; set; } = null!;

    public string ChqType { get; set; } = null!;

    public string? Remarks { get; set; }

    public DateTime? WithdrawalDt { get; set; }

    public DateTime EntDt { get; set; }

    public string? EntBy { get; set; }

    public string? IsDel { get; set; }

    public string Vtype { get; set; } = null!;
}
