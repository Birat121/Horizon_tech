using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class CustomerMast
{
    public decimal TransId { get; set; }

    public string? CustomerId { get; set; }

    public string? CustomerName { get; set; }

    public decimal? CrLimit { get; set; }

    public decimal? TermsDays { get; set; }

    public decimal? DiscPer { get; set; }

    public string? Add1 { get; set; }

    public string? PhoneNo { get; set; }

    public string? MobileNo { get; set; }

    public string? EmailId { get; set; }

    public string? ContactName { get; set; }

    public string? PanNo { get; set; }

    public string? EntryBy { get; set; }

    public DateTime? EntryDate { get; set; }

    public string? ModifyBy { get; set; }

    public DateTime? ModifyDate { get; set; }

    public string? MemId { get; set; }

    public int? MaxId { get; set; }

    public string? AreaCode { get; set; }

    public decimal Bgamt { get; set; }
}
