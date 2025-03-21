using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class VendorMast
{
    public decimal TransId { get; set; }

    public string? VendId { get; set; }

    public string? VendName { get; set; }

    public string? Add1 { get; set; }

    public string? CityName { get; set; }

    public string? MobileNo { get; set; }

    public string? PhoneNo { get; set; }

    public string? EmailId { get; set; }

    public string? PanNo { get; set; }

    public string? ContactName { get; set; }

    public string? Remarks { get; set; }

    public string? EntryBy { get; set; }

    public DateTime? EntryDate { get; set; }

    public string? ModifyBy { get; set; }

    public DateTime? ModifyDate { get; set; }

    public decimal Bgamt { get; set; }
}
