using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class MemAcc
{
    public decimal TransId { get; set; }

    public string? Idno { get; set; }

    public string? MemName { get; set; }

    public string? Gender { get; set; }

    public string? Occupation { get; set; }

    public string? Fmname { get; set; }

    public string? GFather { get; set; }

    public string? Add1 { get; set; }

    public string? Add2 { get; set; }

    public string? ContactNo { get; set; }

    public string? EmailId { get; set; }

    public string? Nationality { get; set; }

    public string? Relegion { get; set; }

    public string? IsMarried { get; set; }

    public string? CitizenshipNo { get; set; }

    public string? DateOfBirth { get; set; }

    public DateTime? JoiningDate { get; set; }

    public string? EntryBy { get; set; }

    public string? EntrySys { get; set; }

    public string? VerifyBy { get; set; }

    public string? IsModify { get; set; }

    public DateTime? EntSoftDate { get; set; }

    public DateTime EntSysDate { get; set; }
}
