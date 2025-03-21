using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class MissS
{
    public decimal TransId { get; set; }

    public string? Isp { get; set; }

    public DateTime? IssDate { get; set; }

    public string? BranchFrom { get; set; }

    public string? BranchTo { get; set; }

    public string? VehicleNo { get; set; }

    public string? LicenseNo { get; set; }

    public string? DriverName { get; set; }

    public decimal? CarriageExp { get; set; }

    public string? TransporterAdd { get; set; }

    public string? ReceiverAdd { get; set; }

    public DateTime EntryDate { get; set; }

    public string? EntryBy { get; set; }
}
