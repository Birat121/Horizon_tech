using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Acc
{
    public decimal TransId { get; set; }

    public string Acc1 { get; set; } = null!;

    public string Acn { get; set; } = null!;

    public string? Acg { get; set; }

    public string? Acgg { get; set; }

    public decimal? AclO { get; set; }

    public decimal? AclD { get; set; }

    public string? L0 { get; set; }

    public string? L1 { get; set; }

    public string? L2 { get; set; }

    public string? L3 { get; set; }

    public string? L4 { get; set; }

    public string? L5 { get; set; }

    public string? AcType { get; set; }

    public string? BlPl { get; set; }

    public DateTime? CreatDate { get; set; }

    public string? ChildStatus { get; set; }

    public string? CreatBy { get; set; }

    public string? CreatSys { get; set; }

    public string? ModifyBy { get; set; }

    public string? ModifySys { get; set; }

    public string? MasterAcType { get; set; }

    public string? NpName { get; set; }

    public string? JpnName { get; set; }

    public string? Remarks { get; set; }

    public string? SysAc { get; set; }

    public string? IsSubLed { get; set; }
}
