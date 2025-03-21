using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace backend.Models;

public partial class ApplicationDbContext : DbContext
{
    public ApplicationDbContext()
    {
    }

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Acc> Accs { get; set; }

    public virtual DbSet<BarImg> BarImgs { get; set; }

    public virtual DbSet<BarPr> BarPrs { get; set; }

    public virtual DbSet<BatchMast> BatchMasts { get; set; }

    public virtual DbSet<Bgentry> Bgentries { get; set; }

    public virtual DbSet<BillPrintRecord> BillPrintRecords { get; set; }

    public virtual DbSet<BrId> BrIds { get; set; }

    public virtual DbSet<CDuty> CDuties { get; set; }

    public virtual DbSet<CategoryMast> CategoryMasts { get; set; }

    public virtual DbSet<CbmsSetting> CbmsSettings { get; set; }

    public virtual DbSet<CbmsSettingRecord> CbmsSettingRecords { get; set; }

    public virtual DbSet<Cbmspost> Cbmsposts { get; set; }

    public virtual DbSet<Con1> Cons { get; set; }

    public virtual DbSet<CountSet> CountSets { get; set; }

    public virtual DbSet<CreditorMast> CreditorMasts { get; set; }

    public virtual DbSet<CusFetEnableDisable> CusFetEnableDisables { get; set; }

    public virtual DbSet<CustomerMast> CustomerMasts { get; set; }

    public virtual DbSet<DebitorMast> DebitorMasts { get; set; }

    public virtual DbSet<DepartmentMast> DepartmentMasts { get; set; }

    public virtual DbSet<DmgG> DmgGs { get; set; }

    public virtual DbSet<EndOfDay> EndOfDays { get; set; }

    public virtual DbSet<EndOfYear> EndOfYears { get; set; }

    public virtual DbSet<ExChartOfAcc> ExChartOfAccs { get; set; }

    public virtual DbSet<ExNp> ExNps { get; set; }

    public virtual DbSet<ExOpbBal> ExOpbBals { get; set; }

    public virtual DbSet<ExOpbStk> ExOpbStks { get; set; }

    public virtual DbSet<ExPdInfo> ExPdInfos { get; set; }

    public virtual DbSet<ExVend> ExVends { get; set; }

    public virtual DbSet<ExcelSalesCompleted> ExcelSalesCompleteds { get; set; }

    public virtual DbSet<GreetingNote> GreetingNotes { get; set; }

    public virtual DbSet<HsalesI> HsalesIs { get; set; }

    public virtual DbSet<HsalesID> HsalesIDs { get; set; }

    public virtual DbSet<IbossSaleD> IbossSaleDs { get; set; }

    public virtual DbSet<IbossSaleSum> IbossSaleSums { get; set; }

    public virtual DbSet<InvG> InvGs { get; set; }

    public virtual DbSet<InvGD> InvGDs { get; set; }

    public virtual DbSet<InvSalesInvoiceDetail> InvSalesInvoiceDetails { get; set; }

    public virtual DbSet<InvSalesReturnDetail> InvSalesReturnDetails { get; set; }

    public virtual DbSet<InvSalesReturnSummary> InvSalesReturnSummaries { get; set; }

    public virtual DbSet<InvSalesSummary> InvSalesSummaries { get; set; }

    public virtual DbSet<Jvn> Jvns { get; set; }

    public virtual DbSet<LoginLog> LoginLogs { get; set; }

    public virtual DbSet<Lpd> Lpds { get; set; }

    public virtual DbSet<MaterialIssue> MaterialIssues { get; set; }

    public virtual DbSet<MemAcc> MemAccs { get; set; }

    public virtual DbSet<MinPnt> MinPnts { get; set; }

    public virtual DbSet<MissS> MissSes { get; set; }

    public virtual DbSet<MonthDt> MonthDts { get; set; }

    public virtual DbSet<Mrn> Mrns { get; set; }

    public virtual DbSet<Mrnssummary> Mrnssummaries { get; set; }

    public virtual DbSet<MultiMrp> MultiMrps { get; set; }

    public virtual DbSet<MyAvr7677> MyAvr7677s { get; set; }

    public virtual DbSet<MyAvr7778> MyAvr7778s { get; set; }

    public virtual DbSet<MyAvr7879> MyAvr7879s { get; set; }

    public virtual DbSet<MyAvr7980> MyAvr7980s { get; set; }

    public virtual DbSet<MyAvr8081> MyAvr8081s { get; set; }

    public virtual DbSet<MyAvr8182> MyAvr8182s { get; set; }

    public virtual DbSet<MyBak> MyBaks { get; set; }

    public virtual DbSet<MyLogo> MyLogos { get; set; }

    public virtual DbSet<NepEng> NepEngs { get; set; }

    public virtual DbSet<NpDt> NpDts { get; set; }

    public virtual DbSet<Oc> Ocs { get; set; }

    public virtual DbSet<Opb7677> Opb7677s { get; set; }

    public virtual DbSet<Opb7778> Opb7778s { get; set; }

    public virtual DbSet<Opb7879> Opb7879s { get; set; }

    public virtual DbSet<Opb7980> Opb7980s { get; set; }

    public virtual DbSet<Opb8081> Opb8081s { get; set; }

    public virtual DbSet<Opb8182> Opb8182s { get; set; }

    public virtual DbSet<OpbStock7677> OpbStock7677s { get; set; }

    public virtual DbSet<OpbStock7778> OpbStock7778s { get; set; }

    public virtual DbSet<OpbStock7879> OpbStock7879s { get; set; }

    public virtual DbSet<OpbStock7980> OpbStock7980s { get; set; }

    public virtual DbSet<OpbStock8081> OpbStock8081s { get; set; }

    public virtual DbSet<OpbStock8182> OpbStock8182s { get; set; }

    public virtual DbSet<OpbTempTable> OpbTempTables { get; set; }

    public virtual DbSet<Owner> Owners { get; set; }

    public virtual DbSet<Pdcentry> Pdcentries { get; set; }

    public virtual DbSet<Photo> Photos { get; set; }

    public virtual DbSet<PntUse> PntUses { get; set; }

    public virtual DbSet<PointC> PointCs { get; set; }

    public virtual DbSet<PriceC> PriceCs { get; set; }

    public virtual DbSet<PrinterName> PrinterNames { get; set; }

    public virtual DbSet<Prod> Prods { get; set; }

    public virtual DbSet<ProdCtrl> ProdCtrls { get; set; }

    public virtual DbSet<ProductMaster> ProductMasters { get; set; }

    public virtual DbSet<ProductMasterCopy> ProductMasterCopies { get; set; }

    public virtual DbSet<ProductUom> ProductUoms { get; set; }

    public virtual DbSet<ProjectMast> ProjectMasts { get; set; }

    public virtual DbSet<PurAddCostDetail> PurAddCostDetails { get; set; }

    public virtual DbSet<PurAddCostSum> PurAddCostSums { get; set; }

    public virtual DbSet<PurAddLedMap> PurAddLedMaps { get; set; }

    public virtual DbSet<PurchaseReturn> PurchaseReturns { get; set; }

    public virtual DbSet<PurchaseReturnDetail> PurchaseReturnDetails { get; set; }

    public virtual DbSet<RptTempTable> RptTempTables { get; set; }

    public virtual DbSet<SAccessLevel> SAccessLevels { get; set; }

    public virtual DbSet<SAccessTran> SAccessTrans { get; set; }

    public virtual DbSet<SDetail> SDetails { get; set; }

    public virtual DbSet<SMenuLevel> SMenuLevels { get; set; }

    public virtual DbSet<SMenuTransaction> SMenuTransactions { get; set; }

    public virtual DbSet<SSy> SSys { get; set; }

    public virtual DbSet<SalesArea> SalesAreas { get; set; }

    public virtual DbSet<ServiceI> ServiceIs { get; set; }

    public virtual DbSet<StkLoc> StkLocs { get; set; }

    public virtual DbSet<StockAdj7677> StockAdj7677s { get; set; }

    public virtual DbSet<StockAdj7778> StockAdj7778s { get; set; }

    public virtual DbSet<StockAdj7879> StockAdj7879s { get; set; }

    public virtual DbSet<StockAdj7980> StockAdj7980s { get; set; }

    public virtual DbSet<StockAdj8081> StockAdj8081s { get; set; }

    public virtual DbSet<StockAdj8182> StockAdj8182s { get; set; }

    public virtual DbSet<StrSm> StrSms { get; set; }

    public virtual DbSet<StrSql> StrSqls { get; set; }

    public virtual DbSet<SubCategoryMast> SubCategoryMasts { get; set; }

    public virtual DbSet<SubLedMappingMast> SubLedMappingMasts { get; set; }

    public virtual DbSet<SubLedMast> SubLedMasts { get; set; }

    public virtual DbSet<TempVarchar> TempVarchars { get; set; }

    public virtual DbSet<Ucnt> Ucnts { get; set; }

    public virtual DbSet<UomMast> UomMasts { get; set; }

    public virtual DbSet<UploadExcelSale> UploadExcelSales { get; set; }

    public virtual DbSet<UserLog> UserLogs { get; set; }

    public virtual DbSet<VatLedMapping> VatLedMappings { get; set; }

    public virtual DbSet<VendorMast> VendorMasts { get; set; }

    public virtual DbSet<VoidInv> VoidInvs { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Name=DefaultConnection");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Acc>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__Acc__9E5DDB1C5E74FADA");

            entity.ToTable("Acc", tb => tb.HasTrigger("TG1_P_Delete"));

            entity.HasIndex(e => e.Acc1, "ChkDupAccAcc").IsUnique();

            entity.HasIndex(e => e.Acn, "ChkDupAccName").IsUnique();

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.AcType)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Acc1)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("Acc");
            entity.Property(e => e.Acg)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Acgg)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.AclD).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.AclO).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.Acn)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.BlPl)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("Bl_Pl");
            entity.Property(e => e.ChildStatus)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.CreatBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CreatDate).HasColumnType("datetime");
            entity.Property(e => e.CreatSys)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.IsSubLed)
                .HasMaxLength(1)
                .IsUnicode(false);
            entity.Property(e => e.JpnName)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.L0)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.L1)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.L2)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.L3)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.L4)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.L5)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.MasterAcType)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ModifyBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ModifySys)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.NpName)
                .HasMaxLength(250)
                .IsUnicode(false)
                .HasColumnName("npName");
            entity.Property(e => e.Remarks)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.SysAc)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<BarImg>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__BarImg__9E5DDB1C1B48FEF0");

            entity.ToTable("BarImg");

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.ExpDt)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ItemDesc)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.MfgDt)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.PartyName)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.Ph).HasColumnType("image");
            entity.Property(e => e.Pid)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("PId");
            entity.Property(e => e.Rate).HasColumnType("numeric(18, 2)");
        });

        modelBuilder.Entity<BarPr>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__BarPR__9E5DDB1C0FD74C44");

            entity.ToTable("BarPR", tb => tb.HasTrigger("TG501_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.EnteredBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EnteredSys)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Pdate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime")
                .HasColumnName("PDate");
            entity.Property(e => e.Pid)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("PID");
            entity.Property(e => e.Pname)
                .HasMaxLength(500)
                .IsUnicode(false)
                .HasColumnName("PName");
            entity.Property(e => e.Rate).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.TransNo)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<BatchMast>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__BatchMas__9E5DDB1C66361833");

            entity.ToTable("BatchMast");

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.BatchId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("BatchID");
            entity.Property(e => e.BatchNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.BranchId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("BranchID");
            entity.Property(e => e.EditedBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EditedDate).HasColumnType("datetime");
            entity.Property(e => e.EditedSys)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EnteredBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EnteredDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.EnteredSys)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ExpDt).HasColumnType("datetime");
            entity.Property(e => e.MfgDt).HasColumnType("datetime");
            entity.Property(e => e.Mrp)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("MRP");
            entity.Property(e => e.Pid)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("PID");
            entity.Property(e => e.Tp)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("TP");
        });

        modelBuilder.Entity<Bgentry>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__BGEntry__9E5DDB1C270FB757");

            entity.ToTable("BGEntry", tb => tb.HasTrigger("TG137_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.BankBrName)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.BankName).HasMaxLength(100);
            entity.Property(e => e.Bgamt)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("BGAmt");
            entity.Property(e => e.Bgno)
                .HasMaxLength(100)
                .HasColumnName("BGNo");
            entity.Property(e => e.CusId)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntDt)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.ExpDt).HasColumnType("datetime");
            entity.Property(e => e.IsDel)
                .HasMaxLength(1)
                .IsUnicode(false);
            entity.Property(e => e.IssDt).HasColumnType("datetime");
            entity.Property(e => e.Remarks).HasMaxLength(500);
            entity.Property(e => e.TrDt).HasColumnType("datetime");
            entity.Property(e => e.TransNo)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<BillPrintRecord>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__BillPrin__9E5DDB1C0B129727");

            entity.ToTable("BillPrintRecord", tb => tb.HasTrigger("TG15_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.BillDate).HasColumnType("datetime");
            entity.Property(e => e.BillNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.PrintBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.PrintDate).HasColumnType("datetime");
        });

        modelBuilder.Entity<BrId>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__BrId__9E5DDB1C7C5A637C");

            entity.ToTable("BrId", tb => tb.HasTrigger("TG120_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.EnteredDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.PartyBrId)
                .HasMaxLength(3)
                .IsUnicode(false);
        });

        modelBuilder.Entity<CDuty>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__C_Duty__9E5DDB1C1308BEAA");

            entity.ToTable("C_Duty", tb => tb.HasTrigger("TG913_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.AcType)
                .HasMaxLength(10)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.Acc)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Acn)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.AddLess)
                .HasMaxLength(10)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("Add_Less");
            entity.Property(e => e.CStatus)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("cStatus");
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.ModifyBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ModifyDate).HasColumnType("datetime");
            entity.Property(e => e.SAcn)
                .HasMaxLength(15)
                .IsUnicode(false)
                .HasColumnName("sAcn");
            entity.Property(e => e.TransDate).HasColumnType("datetime");
            entity.Property(e => e.Vatable)
                .HasMaxLength(10)
                .IsUnicode(false)
                .IsFixedLength();
        });

        modelBuilder.Entity<CategoryMast>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__Category__9E5DDB1C3631FF56");

            entity.ToTable("CategoryMast", tb => tb.HasTrigger("TG2_P_Delete"));

            entity.HasIndex(e => e.CatId, "ChkDupCategory").IsUnique();

            entity.HasIndex(e => e.CatName, "ChkDupCategoryName").IsUnique();

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.CatId)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CatName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryDate).HasColumnType("datetime");
            entity.Property(e => e.ModifyBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ModifyDate).HasColumnType("datetime");
            entity.Property(e => e.VatRate).HasColumnType("numeric(18, 2)");
        });

        modelBuilder.Entity<CbmsSetting>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__CBMS_SET__9E5DDB1C155B1B70");

            entity.ToTable("CBMS_SETTING", tb => tb.HasTrigger("TG22_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.LastUpdate).HasColumnType("datetime");
            entity.Property(e => e.Pwd)
                .HasMaxLength(50)
                .HasDefaultValue("test@321");
            entity.Property(e => e.RealTime)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.SchedulerStartFrom).HasColumnType("datetime");
            entity.Property(e => e.Uid)
                .HasMaxLength(50)
                .HasDefaultValue("Test_CBMS");
            entity.Property(e => e.UpdateBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Uri)
                .HasMaxLength(100)
                .HasDefaultValue("http://43.245.85.152:9050/");
        });

        modelBuilder.Entity<CbmsSettingRecord>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__CBMS_SET__9E5DDB1C1A1FD08D");

            entity.ToTable("CBMS_SETTING_Record", tb => tb.HasTrigger("TG23_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.Pwd)
                .HasMaxLength(50)
                .HasDefaultValue("test@321");
            entity.Property(e => e.RealTime)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.SchedulerStartFrom).HasColumnType("datetime");
            entity.Property(e => e.Uid)
                .HasMaxLength(50)
                .HasDefaultValue("Test_CBMS");
            entity.Property(e => e.UpdateBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.UpdateDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Uri)
                .HasMaxLength(100)
                .HasDefaultValue("http://43.245.85.152:9050/");
        });

        modelBuilder.Entity<Cbmspost>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__CBMSPost__9E5DDB1C2C09769E");

            entity.ToTable("CBMSPost", tb => tb.HasTrigger("TG35_P_Delete"));

            entity.HasIndex(e => e.InvNo, "ChkDupInvNo_CBMSPost").IsUnique();

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.InvNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.IsRealTime).HasColumnType("datetime");
        });

        modelBuilder.Entity<Con1>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__Cons__9E5DDB1C4F52B2DB");

            entity.ToTable(tb => tb.HasTrigger("TG637_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.BatchId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("BatchID");
            entity.Property(e => e.BranchCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ConsId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("ConsID");
            entity.Property(e => e.ConsQty).HasColumnType("numeric(18, 5)");
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.ItemTotal).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.LocId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("LocID");
            entity.Property(e => e.PackQty).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.PackRate).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ProdId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("ProdID");
            entity.Property(e => e.TransDate).HasColumnType("datetime");
            entity.Property(e => e.TransNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Uom)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("UOM");
        });

        modelBuilder.Entity<CountSet>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__CountSet__9E5DDB1C1F198FD4");

            entity.ToTable("CountSet", tb => tb.HasTrigger("TG502_P_Delete"));

            entity.HasIndex(e => e.CountNo, "ChkDupCounter_No").IsUnique();

            entity.HasIndex(e => e.MacId, "ChkDupMac_ID").IsUnique();

            entity.HasIndex(e => e.Pcname, "ChkDupPc_Name").IsUnique();

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.IsDel)
                .HasMaxLength(5)
                .IsUnicode(false);
            entity.Property(e => e.MacId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("MacID");
            entity.Property(e => e.Pcname)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("PCName");
            entity.Property(e => e.SettingDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<CreditorMast>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__Creditor__9E5DDB1C4850AF91");

            entity.ToTable("CreditorMast", tb => tb.HasTrigger("TG1501_P_Del"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.CreditorId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("CreditorID");
            entity.Property(e => e.CreditorName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryDate).HasColumnType("datetime");
            entity.Property(e => e.ModifyBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ModifyDate).HasColumnType("datetime");
        });

        modelBuilder.Entity<CusFetEnableDisable>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__CusFetEn__9E5DDB1C3FDB6521");

            entity.ToTable("CusFetEnableDisable", tb => tb.HasTrigger("TG141_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.EntBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntDt)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.EntPc)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.IsAccess)
                .HasMaxLength(1)
                .IsUnicode(false);
            entity.Property(e => e.MacId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("MacID");
        });

        modelBuilder.Entity<CustomerMast>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__Customer__9E5DDB1C2CA8951C");

            entity.ToTable("CustomerMast", tb => tb.HasTrigger("TG6_P_Delete"));

            entity.HasIndex(e => e.CustomerId, "ChkDupCustomerMast").IsUnique();

            entity.HasIndex(e => e.CustomerName, "ChkDupCustomerName").IsUnique();

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.Add1).HasMaxLength(250);
            entity.Property(e => e.AreaCode).HasMaxLength(50);
            entity.Property(e => e.Bgamt)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("BGAmt");
            entity.Property(e => e.ContactName).HasMaxLength(250);
            entity.Property(e => e.CrLimit).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.CustomerId)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CustomerName)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.DiscPer).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.EmailId)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("EmailID");
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryDate).HasColumnType("datetime");
            entity.Property(e => e.MaxId).HasColumnName("MaxID");
            entity.Property(e => e.MemId)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.MobileNo)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.ModifyBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ModifyDate).HasColumnType("datetime");
            entity.Property(e => e.PanNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.PhoneNo)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.TermsDays).HasColumnType("numeric(18, 0)");
        });

        modelBuilder.Entity<DebitorMast>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__DebitorM__9E5DDB1C44801EAD");

            entity.ToTable("DebitorMast", tb => tb.HasTrigger("TG1502_P_Del"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.DebitorId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("DebitorID");
            entity.Property(e => e.DebitorName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryDate).HasColumnType("datetime");
            entity.Property(e => e.ModifyBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ModifyDate).HasColumnType("datetime");
        });

        modelBuilder.Entity<DepartmentMast>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__Departme__9E5DDB1C7CC477D0");

            entity.ToTable("DepartmentMast", tb => tb.HasTrigger("TG1503_P_Del"));

            entity.HasIndex(e => e.DeptId, "ChkDupDept_Code").IsUnique();

            entity.HasIndex(e => e.DeptName, "ChkDupDept_Name").IsUnique();

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.DeptId)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.DeptName)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.EnteredBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EnteredDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.EnteredSys)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<DmgG>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__DmgG__9E5DDB1C24D2692A");

            entity.ToTable("DmgG", tb => tb.HasTrigger("TG503_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.AvlQ).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.BatchId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("BatchID");
            entity.Property(e => e.BranchId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("BranchID");
            entity.Property(e => e.EntBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.EntPc)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("EntPC");
            entity.Property(e => e.IsDel)
                .HasMaxLength(5)
                .IsUnicode(false);
            entity.Property(e => e.LocId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("LocID");
            entity.Property(e => e.Pid)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("PID");
            entity.Property(e => e.Qty).HasColumnType("numeric(18, 3)");
            entity.Property(e => e.Rate).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.TAmt)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("tAmt");
            entity.Property(e => e.TransDate).HasColumnType("datetime");
            entity.Property(e => e.TransNo)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<EndOfDay>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("EndOfDay", tb => tb.HasTrigger("TG11_P_Delete"));

            entity.Property(e => e.EndOfDay1)
                .HasColumnType("datetime")
                .HasColumnName("EndOfDay");
            entity.Property(e => e.EndOfProcess).HasMaxLength(50);
            entity.Property(e => e.StartOfDay).HasColumnType("datetime");
            entity.Property(e => e.StartOfProcess).HasMaxLength(50);
            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
        });

        modelBuilder.Entity<EndOfYear>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("EndOfYear", tb => tb.HasTrigger("TG10_P_Delete"));

            entity.Property(e => e.EndOfProcess).HasMaxLength(50);
            entity.Property(e => e.EndOfYear1)
                .HasColumnType("datetime")
                .HasColumnName("EndOfYear");
            entity.Property(e => e.Remarks).HasMaxLength(50);
            entity.Property(e => e.StartOfProcess).HasMaxLength(50);
            entity.Property(e => e.StartOfYear).HasColumnType("datetime");
            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)");
        });

        modelBuilder.Entity<ExChartOfAcc>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__Ex_Chart__9E5DDB1C53584DE9");

            entity.ToTable("Ex_ChartOfAcc");

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.AccountHead)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.CatName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.EntSoftDate).HasColumnType("datetime");
            entity.Property(e => e.EntSysDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.GName)
                .HasMaxLength(500)
                .IsUnicode(false)
                .HasColumnName("gName");
            entity.Property(e => e.SubGname)
                .IsUnicode(false)
                .HasColumnName("SubGName");
            entity.Property(e => e.SubGname1)
                .IsUnicode(false)
                .HasColumnName("SubGName1");
            entity.Property(e => e.SubGname2)
                .IsUnicode(false)
                .HasColumnName("SubGName2");
        });

        modelBuilder.Entity<ExNp>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__ExNp__9E5DDB1C45FE52CB");

            entity.ToTable("ExNp", tb => tb.HasTrigger("TG602_P_Del"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.CusId)
                .HasMaxLength(250)
                .IsUnicode(false)
                .HasColumnName("CusID");
            entity.Property(e => e.Enp)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("ENP");
            entity.Property(e => e.Esms).HasColumnName("ESms");
            entity.Property(e => e.IsDel)
                .HasMaxLength(5)
                .IsUnicode(false);
            entity.Property(e => e.Lkey)
                .HasMaxLength(500)
                .IsUnicode(false)
                .HasColumnName("LKey");
            entity.Property(e => e.Ludt)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime")
                .HasColumnName("LUDt");
        });

        modelBuilder.Entity<ExOpbBal>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__Ex_OpbBa__9E5DDB1C61A66D40");

            entity.ToTable("Ex_OpbBal");

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.Acn)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.Cr).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Dr).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.EntSoftDate).HasColumnType("datetime");
            entity.Property(e => e.EntSysDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<ExOpbStk>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__Ex_OpbSt__9E5DDB1C5CE1B823");

            entity.ToTable("Ex_OpbStk");

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.EntSoftDate).HasColumnType("datetime");
            entity.Property(e => e.EntSysDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.ProductName)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.Qty).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Rate).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.TAmt)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("tAmt");
        });

        modelBuilder.Entity<ExPdInfo>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__Ex_PdInf__9E5DDB1C581D0306");

            entity.ToTable("Ex_PdInfo");

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.CatName)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.EntSoftDate).HasColumnType("datetime");
            entity.Property(e => e.EntSysDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.ProductName)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.SubCat)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.UnitRate).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.UnitSale).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Uom)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("UOM");
            entity.Property(e => e.Ws)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("WS");
        });

        modelBuilder.Entity<ExVend>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__Ex_Vend__9E5DDB1C666B225D");

            entity.ToTable("Ex_Vend");

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.Acg)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.Acn)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.Add1)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.ContactP)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.EntSoftDate).HasColumnType("datetime");
            entity.Property(e => e.EntSysDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.MobileNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.PanNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.PhoneNo)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<ExcelSalesCompleted>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__ExcelSal__9E5DDB1C0D4FE554");

            entity.ToTable("ExcelSalesCompleted", tb => tb.HasTrigger("TG890_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.EntBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.EntPc)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("EntPC");
            entity.Property(e => e.IsDel)
                .HasMaxLength(1)
                .IsUnicode(false);
            entity.Property(e => e.SalesDate).HasColumnType("datetime");
            entity.Property(e => e.UploadId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("UploadID");
        });

        modelBuilder.Entity<GreetingNote>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("GreetingNote", tb => tb.HasTrigger("TG1504_P_Del"));

            entity.Property(e => e.GreetingNote1)
                .HasMaxLength(250)
                .IsUnicode(false)
                .HasColumnName("GreetingNote");
            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.UpdateBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.UpdateDate).HasColumnType("datetime");
            entity.Property(e => e.UpdateSys)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<HsalesI>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__HSalesI__9E5DDB1C100C566E");

            entity.ToTable("HSalesI", tb => tb.HasTrigger("TG61_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.ContraCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CustomerCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.DebitorsAc)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.DiscAmt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.DiscAmtAvat)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("DiscAmtAVat");
            entity.Property(e => e.DiscPer).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.DiscPerAvat)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("DiscPerAVat");
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.GrandTotal).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.InvoiceDate).HasColumnType("datetime");
            entity.Property(e => e.InvoiceNo)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.IsDeleted)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("Is_Deleted");
            entity.Property(e => e.NetReceived).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.PaymentType)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.PrintCopy).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.RateType)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.SubTotal).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.SubTotalAdisc)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("SubTotalADisc");
            entity.Property(e => e.VatAmt).HasColumnType("numeric(18, 2)");
        });

        modelBuilder.Entity<HsalesID>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__HSalesI___9E5DDB1C0A537D18");

            entity.ToTable("HSalesI_D", tb => tb.HasTrigger("TG51_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.EntDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.InvoiceDate).HasColumnType("datetime");
            entity.Property(e => e.InvoiceNo)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.IsDeleted)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("Is_Deleted");
            entity.Property(e => e.ItemGtotal)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("ItemGTotal");
            entity.Property(e => e.ItemTotal).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ItemVat).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.PackQty).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.ProductId)
                .HasMaxLength(100)
                .HasColumnName("ProductID");
            entity.Property(e => e.SaleQ).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.UnitRate).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Uom)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("UOM");
            entity.Property(e => e.WeAvrC).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.WeAvrP).HasColumnType("numeric(18, 2)");
        });

        modelBuilder.Entity<IbossSaleD>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__IBossSal__9E5DDB1C7FF5EA36");

            entity.ToTable("IBossSaleD", tb => tb.HasTrigger("TG889_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.Amount)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("amount");
            entity.Property(e => e.Category)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("category");
            entity.Property(e => e.EntBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.EntPc)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("EntPC");
            entity.Property(e => e.IsDel)
                .HasMaxLength(1)
                .IsUnicode(false);
            entity.Property(e => e.ItemName)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("item_name");
            entity.Property(e => e.Quantity)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("quantity");
            entity.Property(e => e.RecordId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("record_id");
            entity.Property(e => e.SubCategory)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("sub_category");
            entity.Property(e => e.UnitPrice)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("unit_price");
            entity.Property(e => e.UnitTax)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("unit_tax");
        });

        modelBuilder.Entity<IbossSaleSum>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__IBossSal__9E5DDB1C7A3D10E0");

            entity.ToTable("IBossSaleSum", tb => tb.HasTrigger("TG888_P_Delete"));

            entity.HasIndex(e => e.RecordId, "ChkDupRecordID").IsUnique();

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.CustomerAddress)
                .HasMaxLength(250)
                .HasColumnName("customer_address");
            entity.Property(e => e.CustomerEmail)
                .HasMaxLength(250)
                .HasColumnName("customer_email");
            entity.Property(e => e.CustomerMob)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("customer_mob");
            entity.Property(e => e.CustomerName)
                .HasMaxLength(250)
                .HasColumnName("customer_name");
            entity.Property(e => e.CustomerPan)
                .HasMaxLength(50)
                .HasColumnName("customer_pan");
            entity.Property(e => e.CustomerPhone)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("customer_phone");
            entity.Property(e => e.EntBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.EntPc)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("EntPC");
            entity.Property(e => e.InvNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.IsDel)
                .HasMaxLength(1)
                .IsUnicode(false);
            entity.Property(e => e.PaymentMode)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("payment_mode");
            entity.Property(e => e.RecordId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("record_id");
            entity.Property(e => e.SalesAmount)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("sales_amount");
            entity.Property(e => e.SalesDate)
                .HasMaxLength(50)
                .HasColumnName("sales_date");
        });

        modelBuilder.Entity<InvG>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__InvG__9E5DDB1C770B9E7A");

            entity.ToTable("InvG", tb => tb.HasTrigger("TG902_P_Delete"));

            entity.HasIndex(e => e.VRef, "InvG_Dup_vRef").IsUnique();

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.ConId)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CusId)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.DiscAmt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.DiscPer).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.DocNo).HasMaxLength(50);
            entity.Property(e => e.EntSoftDate).HasColumnType("datetime");
            entity.Property(e => e.EntSysDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.EnteredBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.GTotal)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("gTotal");
            entity.Property(e => e.NetAmt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.PanNo)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.SubTotal).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.TransDate).HasColumnType("datetime");
            entity.Property(e => e.VRef)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("vRef");
            entity.Property(e => e.VatAmt).HasColumnType("numeric(18, 2)");
        });

        modelBuilder.Entity<InvGD>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__InvG_D__9E5DDB1C7152C524");

            entity.ToTable("InvG_D", tb => tb.HasTrigger("TG901_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.Acc)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Amt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.EntSoftDate).HasColumnType("datetime");
            entity.Property(e => e.EntSysDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.EnteredBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.TransDate).HasColumnType("datetime");
            entity.Property(e => e.VRef)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("vRef");
        });

        modelBuilder.Entity<InvSalesInvoiceDetail>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__InvSales__9E5DDB1C02B25B50");

            entity.ToTable("InvSalesInvoiceDetail", tb =>
                {
                    tb.HasTrigger("TG1505_P_Del");
                    tb.HasTrigger("TG3334_P_Update");
                });

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.BatchId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("BatchID");
            entity.Property(e => e.BatchName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.BillNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.BranchCode)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasDefaultValue("100");
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryDate).HasColumnType("datetime");
            entity.Property(e => e.InvoiceDate).HasColumnType("datetime");
            entity.Property(e => e.InvoiceNo)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.IsDs)
                .HasMaxLength(1)
                .IsUnicode(false);
            entity.Property(e => e.ItemDiscAmt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ItemDiscPer).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ItemGtotal)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("ItemGTotal");
            entity.Property(e => e.ItemNonTax).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ItemTaxable).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ItemTotalAdisc)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("ItemTotalADisc");
            entity.Property(e => e.ItemTotalBefDisc).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ItemVatAmt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.LocId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("LocID");
            entity.Property(e => e.LocName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.ModifyBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ModifyDate).HasColumnType("datetime");
            entity.Property(e => e.Mrp)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("MRP");
            entity.Property(e => e.OnlTransId)
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("OnlTransID");
            entity.Property(e => e.PackQty).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.Pnt)
                .HasDefaultValueSql("('0')")
                .HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ProductId)
                .HasMaxLength(100)
                .HasColumnName("ProductID");
            entity.Property(e => e.SaleQtyC).HasColumnType("numeric(18, 3)");
            entity.Property(e => e.SaleQtyP).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.UnitRate).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Uom)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("UOM");
            entity.Property(e => e.WeAvrC).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.WeAvrP).HasColumnType("numeric(18, 2)");
        });

        modelBuilder.Entity<InvSalesReturnDetail>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__InvSales__9E5DDB1C15C52FC4");

            entity.ToTable("InvSalesReturnDetail", tb =>
                {
                    tb.HasTrigger("TG1506_P_Del");
                    tb.HasTrigger("TG3336_P_Update");
                });

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.BatchId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("BatchID");
            entity.Property(e => e.BillNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.BranchCode)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasDefaultValue("100");
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryDate).HasColumnType("datetime");
            entity.Property(e => e.IsDs)
                .HasMaxLength(1)
                .IsUnicode(false);
            entity.Property(e => e.ItemDiscAmt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ItemDiscPer).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ItemGtotal)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("ItemGTotal");
            entity.Property(e => e.ItemNonTax).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ItemTaxable).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ItemTotalAdisc)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("ItemTotalADisc");
            entity.Property(e => e.ItemTotalBefDisc).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ItemVatAmt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.LocId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("LocID");
            entity.Property(e => e.ModifyBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ModifyDate).HasColumnType("datetime");
            entity.Property(e => e.Mrp)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("MRP");
            entity.Property(e => e.OnlTransId)
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("OnlTransID");
            entity.Property(e => e.PackQty).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.Pnt)
                .HasDefaultValueSql("('0')")
                .HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ProductId)
                .HasMaxLength(100)
                .HasColumnName("ProductID");
            entity.Property(e => e.ReturnNo)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.RtnQtyC).HasColumnType("numeric(18, 3)");
            entity.Property(e => e.RtnQtyP).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.SaleReturnDate).HasColumnType("datetime");
            entity.Property(e => e.UnitRate).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Uom)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("UOM");
            entity.Property(e => e.WeAvrC).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.WeAvrP).HasColumnType("numeric(18, 2)");
        });

        modelBuilder.Entity<InvSalesReturnSummary>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__InvSales__9E5DDB1C1995C0A8");

            entity.ToTable("InvSalesReturnSummary", tb =>
                {
                    tb.HasTrigger("TG1507_P_Del");
                    tb.HasTrigger("TG3335_P_Update");
                });

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.ApprCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.AreaCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.BillNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.BranchCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Cbmspost)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasDefaultValue("0")
                .HasColumnName("CBMSPost");
            entity.Property(e => e.Change).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ContraCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CurrName).HasMaxLength(100);
            entity.Property(e => e.CustomerCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.DebitorsAc)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.DiscAmt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.DiscAmtAvat)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("DiscAmtAVat");
            entity.Property(e => e.DiscPer).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.DiscPerAvat)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("DiscPerAVat");
            entity.Property(e => e.EntPc)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryDate).HasColumnType("datetime");
            entity.Property(e => e.Equvalent).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ExcRate).HasColumnType("numeric(18, 5)");
            entity.Property(e => e.FinanceBy).HasMaxLength(200);
            entity.Property(e => e.Fname)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("FName");
            entity.Property(e => e.GrandTotal).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.InvNo)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasDefaultValue("");
            entity.Property(e => e.IsDs)
                .HasMaxLength(1)
                .IsUnicode(false);
            entity.Property(e => e.IsRealTime)
                .HasMaxLength(3)
                .IsUnicode(false);
            entity.Property(e => e.JobCardNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.LcDate).HasColumnType("datetime");
            entity.Property(e => e.LcNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.LcTerms).HasMaxLength(200);
            entity.Property(e => e.MacId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("MacID");
            entity.Property(e => e.ModifyBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ModifyDate).HasColumnType("datetime");
            entity.Property(e => e.NetReturnAmt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.NonTaxable).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.OnlTransId)
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("OnlTransID");
            entity.Property(e => e.PaymentType)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.PostDateTime).HasColumnType("datetime");
            entity.Property(e => e.PrintCopy).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.RateType)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Reason)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.ReturnNo)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.SaleReturnDate).HasColumnType("datetime");
            entity.Property(e => e.SalesmanId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("SalesmanID");
            entity.Property(e => e.SubTotal).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.SubTotalAdisc)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("SubTotalADisc");
            entity.Property(e => e.Taxable).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Tender).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.TotalVatAmt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.VatRefund)
                .HasDefaultValueSql("('0')")
                .HasColumnType("numeric(18, 0)");
        });

        modelBuilder.Entity<InvSalesSummary>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__InvSales__9E5DDB1C0682EC34");

            entity.ToTable("InvSalesSummary", tb =>
                {
                    tb.HasTrigger("TG1508_P_Del");
                    tb.HasTrigger("TG3333_P_Update");
                });

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.ApprCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.AreaCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.BillNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.BillType)
                .HasMaxLength(5)
                .IsUnicode(false)
                .HasDefaultValue("Vat");
            entity.Property(e => e.BranchCode)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasDefaultValue("100");
            entity.Property(e => e.Cbmspost)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasDefaultValue("0")
                .HasColumnName("CBMSPost");
            entity.Property(e => e.Change).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ContraCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Counter).HasDefaultValueSql("('1')");
            entity.Property(e => e.CurrName).HasMaxLength(100);
            entity.Property(e => e.CustomerCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.DebitorsAc)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.DiscAmt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.DiscAmtAvat)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("DiscAmtAVat");
            entity.Property(e => e.DiscPer).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.DiscPerAvat)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("DiscPerAVat");
            entity.Property(e => e.DriverName)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.EntPc)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryDate).HasColumnType("datetime");
            entity.Property(e => e.Equvalent).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ExcRate).HasColumnType("numeric(18, 5)");
            entity.Property(e => e.FareChr).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.FinanceBy).HasMaxLength(200);
            entity.Property(e => e.Fname)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("FName");
            entity.Property(e => e.GrandTotal).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.InvoiceDate).HasColumnType("datetime");
            entity.Property(e => e.InvoiceNo)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.IsDs)
                .HasMaxLength(1)
                .IsUnicode(false);
            entity.Property(e => e.IsRealTime)
                .HasMaxLength(3)
                .IsUnicode(false);
            entity.Property(e => e.JobCardNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.LcDate).HasColumnType("datetime");
            entity.Property(e => e.LcNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.LcTerms).HasMaxLength(200);
            entity.Property(e => e.LicenseNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.MacId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("MacID");
            entity.Property(e => e.MobNo)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.ModifyBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ModifyDate).HasColumnType("datetime");
            entity.Property(e => e.NetReceived).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.NonTaxable).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.OnlTransId)
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("OnlTransID");
            entity.Property(e => e.OtherChr).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.PaymentType)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.PostDateTime).HasColumnType("datetime");
            entity.Property(e => e.PrintCopy).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.RateType)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Rmk)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.SalesType)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.SalesmanId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("SalesmanID");
            entity.Property(e => e.SubTotal).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.SubTotalAdisc)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("SubTotalADisc");
            entity.Property(e => e.Taxable).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Tender).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.TermsDay).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.TermsOfDel).HasMaxLength(250);
            entity.Property(e => e.TotalVatAmt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Transporter)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.VatRefund)
                .HasDefaultValueSql("('0')")
                .HasColumnType("numeric(18, 0)");
            entity.Property(e => e.VehicleNo).HasMaxLength(100);
        });

        modelBuilder.Entity<Jvn>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__JVN__9E5DDB1C6339AFF7");

            entity.ToTable("JVN");

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.Acc)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Capture)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ChqNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Computer)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Cr).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.CrFyc)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("CrFYC");
            entity.Property(e => e.CurrName)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.DocNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Dr).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.DrFyc)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("DrFYC");
            entity.Property(e => e.EnteredDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ExcRate).HasColumnType("numeric(18, 5)");
            entity.Property(e => e.Fname)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("FName");
            entity.Property(e => e.FycAmt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.IsDs)
                .HasMaxLength(1)
                .IsUnicode(false);
            entity.Property(e => e.ModifyBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ModifyDate).HasColumnType("datetime");
            entity.Property(e => e.ModifySys)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Narration)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.OnlTransId)
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("OnlTransID");
            entity.Property(e => e.OpAc)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.PartyBillDt).HasColumnType("datetime");
            entity.Property(e => e.Prj).HasMaxLength(100);
            entity.Property(e => e.Qty).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Rate).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.RefSubCat).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.Rmk).HasMaxLength(250);
            entity.Property(e => e.SubLedId)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.TransDate).HasColumnType("datetime");
            entity.Property(e => e.VoucherRef)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<LoginLog>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("LoginLog", tb => tb.HasTrigger("TG1510_P_Del"));

            entity.Property(e => e.ComputerName)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.LoginDate).HasColumnType("datetime");
            entity.Property(e => e.LoginStatus)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.LoginTime)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)");
            entity.Property(e => e.UserName)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Lpd>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("LPD", tb => tb.HasTrigger("TG9_P_Delete"));

            entity.Property(e => e.AcctStat).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.EmpName)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.FullName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.LogName)
                .HasMaxLength(25)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.Pwd)
                .HasMaxLength(12)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)");
        });

        modelBuilder.Entity<MaterialIssue>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__Material__9E5DDB1C027D5126");

            entity.ToTable("MaterialIssue", tb => tb.HasTrigger("TG1511_P_Del"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.BatchId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("BatchID");
            entity.Property(e => e.BranchFrom)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.BranchTo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryDate).HasColumnType("datetime");
            entity.Property(e => e.Isp)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("ISP");
            entity.Property(e => e.IssDate).HasColumnType("datetime");
            entity.Property(e => e.IssQty).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.IssRate).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.LocId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("LocID");
            entity.Property(e => e.ModifyBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ModifyDate).HasColumnType("datetime");
            entity.Property(e => e.ProductId)
                .HasMaxLength(250)
                .IsUnicode(false)
                .HasColumnName("ProductID");
            entity.Property(e => e.SaleRate).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.TotalCost).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Uom)
                .HasMaxLength(50)
                .HasColumnName("UOM");
            entity.Property(e => e.Uomqty)
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("UOMQty");
        });

        modelBuilder.Entity<MemAcc>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__MemAcc__9E5DDB1C55FFB06A");

            entity.ToTable("MemAcc", tb => tb.HasTrigger("TG614_P_Delete"));

            entity.HasIndex(e => e.Idno, "ChkDupAcc").IsUnique();

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.Add1).HasMaxLength(250);
            entity.Property(e => e.Add2).HasMaxLength(250);
            entity.Property(e => e.CitizenshipNo)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.ContactNo)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.DateOfBirth)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EmailId).HasMaxLength(250);
            entity.Property(e => e.EntSoftDate).HasColumnType("datetime");
            entity.Property(e => e.EntSysDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.EntryBy)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.EntrySys)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Fmname)
                .HasMaxLength(250)
                .HasColumnName("FMName");
            entity.Property(e => e.GFather)
                .HasMaxLength(250)
                .HasColumnName("gFather");
            entity.Property(e => e.Gender)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.Idno)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("IDNo");
            entity.Property(e => e.IsMarried)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("Is_Married");
            entity.Property(e => e.IsModify)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("Is_Modify");
            entity.Property(e => e.JoiningDate).HasColumnType("datetime");
            entity.Property(e => e.MemName).HasMaxLength(250);
            entity.Property(e => e.Nationality)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Occupation).HasMaxLength(250);
            entity.Property(e => e.Relegion)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.VerifyBy)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<MinPnt>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__MinPnt__9E5DDB1C35FCF52C");

            entity.ToTable("MinPnt", tb => tb.HasTrigger("TG506_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.EntBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.EntPc)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("EntPC");
            entity.Property(e => e.Pnt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.TransDate).HasColumnType("datetime");
        });

        modelBuilder.Entity<MissS>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__MIss_S__9E5DDB1C0F6D37F0");

            entity.ToTable("MIss_S", tb => tb.HasTrigger("TG34_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.BranchFrom)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.BranchTo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CarriageExp).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.DriverName)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Isp)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("ISP");
            entity.Property(e => e.IssDate).HasColumnType("datetime");
            entity.Property(e => e.LicenseNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ReceiverAdd)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.TransporterAdd)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.VehicleNo)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<MonthDt>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__MonthDt__9E5DDB1C6ADAD1BF");

            entity.ToTable("MonthDt", tb => tb.HasTrigger("TG1512_P_Del"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.MaxDt).HasColumnType("datetime");
            entity.Property(e => e.MinDt).HasColumnType("datetime");
            entity.Property(e => e.Mname)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("MName");
            entity.Property(e => e.Myear)
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("MYear");
            entity.Property(e => e.Remarks)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Mrn>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__MRNS__9E5DDB1C1D66518C");

            entity.ToTable("MRNS");

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.AccptdQty).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.BatchId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("BatchID");
            entity.Property(e => e.BatchName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.BillNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Bqty)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("BQty");
            entity.Property(e => e.BranchCode)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasDefaultValue("100");
            entity.Property(e => e.Btype)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("BType");
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryDate).HasColumnType("datetime");
            entity.Property(e => e.Ida)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("IDA");
            entity.Property(e => e.Idp)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("IDP");
            entity.Property(e => e.ImAmt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.InvoiceDate).HasColumnType("datetime");
            entity.Property(e => e.IsDs)
                .HasMaxLength(1)
                .IsUnicode(false);
            entity.Property(e => e.ItemGtotal)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("ItemGTotal");
            entity.Property(e => e.ItemTotal).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ItemVatAmt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.LocId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("LocID");
            entity.Property(e => e.LocName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.ModifyBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ModifyDate).HasColumnType("datetime");
            entity.Property(e => e.Mrndate)
                .HasColumnType("datetime")
                .HasColumnName("MRNDate");
            entity.Property(e => e.Mrnno)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("MRNNo");
            entity.Property(e => e.Mrp)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("MRP");
            entity.Property(e => e.OnlTransId)
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("OnlTransID");
            entity.Property(e => e.PackCost).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.PackQty).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.Pono)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("PONo");
            entity.Property(e => e.ProductId)
                .HasMaxLength(100)
                .HasColumnName("ProductID");
            entity.Property(e => e.PurAddCost).HasColumnType("numeric(18, 5)");
            entity.Property(e => e.TotalFyc)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("TotalFYC");
            entity.Property(e => e.UnitRate).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.UnitSale).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Uom)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("UOM");
        });

        modelBuilder.Entity<Mrnssummary>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__MRNSsumm__9E5DDB1C2136E270");

            entity.ToTable("MRNSsummary");

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.BillNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.BranchCode)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasDefaultValue("100");
            entity.Property(e => e.ContraCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CreditorsAc)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CurrName)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.DiscAmt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.DiscAmtAvat)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("DiscAmtAVat");
            entity.Property(e => e.DiscPer).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.DiscPerAvat)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("DiscPerAVat");
            entity.Property(e => e.DriverName)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryDate).HasColumnType("datetime");
            entity.Property(e => e.EquvalentAmt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ExcRate).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.GrandTotal).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ImAmt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ImPer).HasColumnType("numeric(18, 6)");
            entity.Property(e => e.ImportTaxable).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ImportVat).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.InvoiceDate).HasColumnType("datetime");
            entity.Property(e => e.IsDs)
                .HasMaxLength(1)
                .IsUnicode(false);
            entity.Property(e => e.LcNo)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.LicenseNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.MobNo)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.ModifyBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ModifyDate).HasColumnType("datetime");
            entity.Property(e => e.Mrndate)
                .HasColumnType("datetime")
                .HasColumnName("MRNDate");
            entity.Property(e => e.Mrnno)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("MRNNo");
            entity.Property(e => e.NetPaid).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.NonTax).HasColumnType("numeric(18, 3)");
            entity.Property(e => e.OnlTransId)
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("OnlTransID");
            entity.Property(e => e.PaymentType)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Pono)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("PONo");
            entity.Property(e => e.Ppdno)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("PPDNo");
            entity.Property(e => e.PrintCopy).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.PurType)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Rmk).HasMaxLength(500);
            entity.Property(e => e.SubTotal).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.SubTotalAdisc)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("SubTotalADisc");
            entity.Property(e => e.Taxable).HasColumnType("numeric(18, 3)");
            entity.Property(e => e.TermsDays).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.TermsOfDel)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.TotalVatAmt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Transporter)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.VehicleNo)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.VendorId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("VendorID");
        });

        modelBuilder.Entity<MultiMrp>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__MultiMrp__9E5DDB1C08C03A61");

            entity.ToTable("MultiMrp", tb => tb.HasTrigger("TG13_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.EnteredBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EnteredDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.EnteredSys)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.IsDel)
                .HasMaxLength(1)
                .IsUnicode(false);
            entity.Property(e => e.Pid)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("PID");
            entity.Property(e => e.Pname)
                .HasMaxLength(250)
                .IsUnicode(false)
                .HasColumnName("PName");
            entity.Property(e => e.Rt).HasColumnType("numeric(18, 2)");
        });

        modelBuilder.Entity<MyAvr7677>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__My_AVR76__9E5DDB1C5E0AE686");

            entity.ToTable("My_AVR7677", tb => tb.HasTrigger("TG1003_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.EachAvr).HasColumnType("numeric(18, 8)");
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Opa)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("OPA");
            entity.Property(e => e.Opq)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("OPQ");
            entity.Property(e => e.Pa)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("PA");
            entity.Property(e => e.Pid)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("PID");
            entity.Property(e => e.Pq)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("PQ");
        });

        modelBuilder.Entity<MyAvr7778>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__My_AVR77__9E5DDB1C58520D30");

            entity.ToTable("My_AVR7778", tb => tb.HasTrigger("TG1002_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.BrId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasDefaultValue("001")
                .HasColumnName("BrID");
            entity.Property(e => e.EachAvr).HasColumnType("numeric(18, 8)");
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Opa)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("OPA");
            entity.Property(e => e.Opq)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("OPQ");
            entity.Property(e => e.Pa)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("PA");
            entity.Property(e => e.Pid)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("PID");
            entity.Property(e => e.Pq)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("PQ");
        });

        modelBuilder.Entity<MyAvr7879>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__My_AVR78__9E5DDB1C76A18A26");

            entity.ToTable("My_AVR7879", tb => tb.HasTrigger("TG1004_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.BrId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasDefaultValue("001")
                .HasColumnName("BrID");
            entity.Property(e => e.EachAvr).HasColumnType("numeric(18, 8)");
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Opa)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("OPA");
            entity.Property(e => e.Opq)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("OPQ");
            entity.Property(e => e.Pa)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("PA");
            entity.Property(e => e.Pid)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("PID");
            entity.Property(e => e.Pq)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("PQ");
        });

        modelBuilder.Entity<MyAvr7980>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__My_AVR79__9E5DDB1C2097C3F2");

            entity.ToTable("My_AVR7980", tb => tb.HasTrigger("TG1005_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.BrId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasDefaultValue("001")
                .HasColumnName("BrID");
            entity.Property(e => e.EachAvr).HasColumnType("numeric(18, 8)");
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Opa)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("OPA");
            entity.Property(e => e.Opq)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("OPQ");
            entity.Property(e => e.Pa)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("PA");
            entity.Property(e => e.Pid)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("PID");
            entity.Property(e => e.Pq)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("PQ");
        });

        modelBuilder.Entity<MyAvr8081>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__My_AVR80__9E5DDB1C3D3402A0");

            entity.ToTable("My_AVR8081", tb => tb.HasTrigger("TG1006_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.BrId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasDefaultValue("001")
                .HasColumnName("BrID");
            entity.Property(e => e.EachAvr).HasColumnType("numeric(18, 8)");
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Opa)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("OPA");
            entity.Property(e => e.Opq)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("OPQ");
            entity.Property(e => e.Pa)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("PA");
            entity.Property(e => e.Pid)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("PID");
            entity.Property(e => e.Pq)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("PQ");
        });

        modelBuilder.Entity<MyAvr8182>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__My_AVR81__9E5DDB1C6324A15E");

            entity.ToTable("My_AVR8182", tb => tb.HasTrigger("TG1007_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.BrId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasDefaultValue("001")
                .HasColumnName("BrID");
            entity.Property(e => e.EachAvr).HasColumnType("numeric(18, 8)");
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Opa)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("OPA");
            entity.Property(e => e.Opq)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("OPQ");
            entity.Property(e => e.Pa)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("PA");
            entity.Property(e => e.Pid)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("PID");
            entity.Property(e => e.Pq)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("PQ");
        });

        modelBuilder.Entity<MyBak>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__MyBak__9E5DDB1C53C2623D");

            entity.ToTable("MyBak", tb => tb.HasTrigger("TGBak_P_Delete"));

            entity.HasIndex(e => e.BakDate, "EX_Dup_BakDate").IsUnique();

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.BakBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.BakDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.BakPc)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("BakPC");
            entity.Property(e => e.MyStatus)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.StartOfDay).HasColumnType("datetime");
        });

        modelBuilder.Entity<MyLogo>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__MyLogo__9E5DDB1C1590259A");

            entity.ToTable("MyLogo", tb => tb.HasTrigger("TG1515_P_Del"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.EditedBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EditedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.EditedSys)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EnteredBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EnteredDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.EnteredSys)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Ph).HasColumnType("image");
            entity.Property(e => e.TransDate).HasColumnType("datetime");
        });

        modelBuilder.Entity<NepEng>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("Nep_Eng", tb => tb.HasTrigger("TG1516_P_Del"));

            entity.Property(e => e.EngDate).HasColumnType("datetime");
            entity.Property(e => e.NepaliDate)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Np)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("np");
            entity.Property(e => e.Remarks)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
        });

        modelBuilder.Entity<NpDt>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__npDt__9E5DDB1C670A40DB");

            entity.ToTable("npDt", tb => tb.HasTrigger("TG1517_P_Del"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.Eng).HasColumnType("datetime");
            entity.Property(e => e.Np)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("np");
        });

        modelBuilder.Entity<Oc>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__OCS__9E5DDB1C23A93AC7");

            entity.ToTable("OCS", tb => tb.HasTrigger("TG601_P_Del"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.Dbn)
                .HasMaxLength(250)
                .HasColumnName("DBN");
            entity.Property(e => e.Dbpass)
                .HasMaxLength(250)
                .HasColumnName("DBPass");
            entity.Property(e => e.NmyIp)
                .HasMaxLength(250)
                .HasColumnName("NMyIP");
            entity.Property(e => e.Nou)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("NOU");
            entity.Property(e => e.OmyIp)
                .HasMaxLength(250)
                .HasColumnName("OMyIP");
            entity.Property(e => e.SerPwd).HasMaxLength(250);
            entity.Property(e => e.SerUid)
                .HasMaxLength(250)
                .HasColumnName("SerUID");
        });

        modelBuilder.Entity<Opb7677>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__Opb7677__9E5DDB1C490FC9A0");

            entity.ToTable("Opb7677", tb => tb.HasTrigger("TG1518_P_Del"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.Acc)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Bal).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ClosingBy)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.ClosingDate).HasColumnType("datetime");
            entity.Property(e => e.Cr).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Dr).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Prj).HasMaxLength(100);
            entity.Property(e => e.Remarks)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Opb7778>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__Opb7778__9E5DDB1C416EA7D8");

            entity.ToTable("Opb7778", tb => tb.HasTrigger("TG1519_P_Del"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.Acc)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Bal).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ClosingBy)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.ClosingDate).HasColumnType("datetime");
            entity.Property(e => e.Cr).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Dr).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Prj).HasMaxLength(100);
            entity.Property(e => e.Remarks)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Opb7879>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__Opb7879__9E5DDB1C6B2FD77A");

            entity.ToTable("Opb7879");

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.Acc)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Bal).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ClosingBy)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.ClosingDate).HasColumnType("datetime");
            entity.Property(e => e.Cr).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Dr).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Prj).HasMaxLength(100);
            entity.Property(e => e.Remarks)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Opb7980>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__Opb7980__9E5DDB1C15261146");

            entity.ToTable("Opb7980");

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.Acc)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Bal).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ClosingBy)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.ClosingDate).HasColumnType("datetime");
            entity.Property(e => e.Cr).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Dr).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Prj).HasMaxLength(100);
            entity.Property(e => e.Remarks)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Opb8081>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__Opb8081__9E5DDB1C31C24FF4");

            entity.ToTable("Opb8081");

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.Acc)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Bal).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ClosingBy)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.ClosingDate).HasColumnType("datetime");
            entity.Property(e => e.Cr).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Dr).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Prj).HasMaxLength(100);
            entity.Property(e => e.Remarks)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Opb8182>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__Opb8182__9E5DDB1C57B2EEB2");

            entity.ToTable("Opb8182");

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.Acc)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Bal).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ClosingBy)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.ClosingDate).HasColumnType("datetime");
            entity.Property(e => e.Cr).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Dr).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Prj).HasMaxLength(100);
            entity.Property(e => e.Remarks)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<OpbStock7677>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__OpbStock__9E5DDB1C50B0EB68");

            entity.ToTable("OpbStock7677", tb => tb.HasTrigger("TG1520_P_Del"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.ClosingDate).HasColumnType("datetime");
            entity.Property(e => e.ProductId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("ProductID");
            entity.Property(e => e.Qty).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.Remarks)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.StockAmt).HasColumnType("numeric(18, 2)");
        });

        modelBuilder.Entity<OpbStock7778>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__OpbStock__9E5DDB1C453F38BC");

            entity.ToTable("OpbStock7778", tb => tb.HasTrigger("TG1521_P_Del"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.ClosingDate).HasColumnType("datetime");
            entity.Property(e => e.ProductId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("ProductID");
            entity.Property(e => e.Qty).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Remarks)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.StockAmt).HasColumnType("numeric(18, 2)");
        });

        modelBuilder.Entity<OpbStock7879>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__OpbStock__9E5DDB1C6F00685E");

            entity.ToTable("OpbStock7879");

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.ClosingDate).HasColumnType("datetime");
            entity.Property(e => e.ProductId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("ProductID");
            entity.Property(e => e.Qty).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Remarks)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.StockAmt).HasColumnType("numeric(18, 2)");
        });

        modelBuilder.Entity<OpbStock7980>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__OpbStock__9E5DDB1C18F6A22A");

            entity.ToTable("OpbStock7980", tb => tb.HasTrigger("TGOStk7980_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.ClosingDate).HasColumnType("datetime");
            entity.Property(e => e.ProductId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("ProductID");
            entity.Property(e => e.Qty).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Remarks)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.StockAmt).HasColumnType("numeric(18, 2)");
        });

        modelBuilder.Entity<OpbStock8081>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__OpbStock__9E5DDB1C3592E0D8");

            entity.ToTable("OpbStock8081");

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.BatchId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("BatchID");
            entity.Property(e => e.BranchId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasDefaultValue("100")
                .HasColumnName("BranchID");
            entity.Property(e => e.ClosingDate).HasColumnType("datetime");
            entity.Property(e => e.LocId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("LocID");
            entity.Property(e => e.ProductId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("ProductID");
            entity.Property(e => e.Qty).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.Remarks)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.StockAmt).HasColumnType("numeric(18, 2)");
        });

        modelBuilder.Entity<OpbStock8182>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__OpbStock__9E5DDB1C5B837F96");

            entity.ToTable("OpbStock8182");

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.BatchId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("BatchID");
            entity.Property(e => e.BranchId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasDefaultValue("100")
                .HasColumnName("BranchID");
            entity.Property(e => e.ClosingDate).HasColumnType("datetime");
            entity.Property(e => e.LocId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("LocID");
            entity.Property(e => e.ProductId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("ProductID");
            entity.Property(e => e.Qty).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Remarks)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.StockAmt).HasColumnType("numeric(18, 2)");
        });

        modelBuilder.Entity<OpbTempTable>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__OpbTempT__9E5DDB1C4C214075");

            entity.ToTable("OpbTempTable");

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.Acc)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Bal).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ClosingBy)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.ClosingDate).HasColumnType("datetime");
            entity.Property(e => e.Cr).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Dr).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Prj).HasMaxLength(250);
            entity.Property(e => e.Remarks)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Owner>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("Owner", tb => tb.HasTrigger("TG1522_P_Del"));

            entity.Property(e => e.Created).HasColumnType("datetime");
            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
        });

        modelBuilder.Entity<Pdcentry>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__PDCEntry__9E5DDB1C18C19800");

            entity.ToTable("PDCEntry", tb => tb.HasTrigger("TG135_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.AccountNo).HasMaxLength(100);
            entity.Property(e => e.BankBrName)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.BankName).HasMaxLength(100);
            entity.Property(e => e.BeneficaryName).HasMaxLength(250);
            entity.Property(e => e.ChqAmt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ChqDate).HasColumnType("datetime");
            entity.Property(e => e.ChqNo).HasMaxLength(100);
            entity.Property(e => e.ChqType)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CusId)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.DepositBankName).HasMaxLength(250);
            entity.Property(e => e.EntBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntDt)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.IsDel)
                .HasMaxLength(1)
                .IsUnicode(false);
            entity.Property(e => e.RefNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Remarks).HasMaxLength(500);
            entity.Property(e => e.TrDt).HasColumnType("datetime");
            entity.Property(e => e.TransNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Vtype)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("VType");
            entity.Property(e => e.WithdrawalDt).HasColumnType("datetime");
        });

        modelBuilder.Entity<Photo>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__Photo__9E5DDB1C5BB889C0");

            entity.ToTable("Photo");

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.Acc)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EditedBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EditedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.EditedSys)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EnteredBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EnteredDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.EnteredSys)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Ph).HasColumnType("image");
            entity.Property(e => e.TransDate).HasColumnType("datetime");
        });

        modelBuilder.Entity<PntUse>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__PntUse__9E5DDB1C3BB5CE82");

            entity.ToTable("PntUse", tb => tb.HasTrigger("TG507_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.AvlPnt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.CusId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("CusID");
            entity.Property(e => e.EntBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.EntPc)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("EntPC");
            entity.Property(e => e.TransDate).HasColumnType("datetime");
            entity.Property(e => e.TransNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.UsePnt).HasColumnType("numeric(18, 2)");
        });

        modelBuilder.Entity<PointC>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__PointC__9E5DDB1C30441BD6");

            entity.ToTable("PointC", tb => tb.HasTrigger("TG505_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.EntBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.EntPc)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("EntPC");
            entity.Property(e => e.IsDel)
                .HasMaxLength(5)
                .IsUnicode(false);
            entity.Property(e => e.Pid)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("PID");
            entity.Property(e => e.Pnt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Qty).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.TransDate).HasColumnType("datetime");
            entity.Property(e => e.TransNo)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<PriceC>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__PriceC__9E5DDB1C2A8B4280");

            entity.ToTable("PriceC", tb => tb.HasTrigger("TG504_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.AvlQ).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.EntBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.EntPc)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("EntPC");
            entity.Property(e => e.IsDel)
                .HasMaxLength(5)
                .IsUnicode(false);
            entity.Property(e => e.NRate)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("nRate");
            entity.Property(e => e.Orate)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("ORate");
            entity.Property(e => e.Pid)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("PID");
            entity.Property(e => e.TransDate).HasColumnType("datetime");
            entity.Property(e => e.TransNo)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<PrinterName>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__PrinterN__9E5DDB1C6EAB62A3");

            entity.ToTable("PrinterName", tb => tb.HasTrigger("TG1523_P_Del"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.Botprinter)
                .HasMaxLength(250)
                .IsUnicode(false)
                .HasColumnName("BOTPrinter");
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Kotprinter)
                .HasMaxLength(250)
                .IsUnicode(false)
                .HasColumnName("KOTPrinter");
            entity.Property(e => e.Posprinter)
                .HasMaxLength(250)
                .IsUnicode(false)
                .HasColumnName("POSPrinter");
            entity.Property(e => e.SettingDate).HasColumnType("datetime");
        });

        modelBuilder.Entity<Prod>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__Prod_S__9E5DDB1C4999D985");

            entity.ToTable("Prod_S", tb => tb.HasTrigger("TG636_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.BatchId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("BatchID");
            entity.Property(e => e.BranchCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CRemarks)
                .HasMaxLength(500)
                .IsUnicode(false)
                .HasColumnName("cRemarks");
            entity.Property(e => e.ChallanNo)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.ItemTotal).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.LocId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("LocID");
            entity.Property(e => e.PRemarks)
                .HasMaxLength(500)
                .IsUnicode(false)
                .HasColumnName("pRemarks");
            entity.Property(e => e.PackQty).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.PackRate).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ProdId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("ProdID");
            entity.Property(e => e.ProdQty).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.TransDate).HasColumnType("datetime");
            entity.Property(e => e.TransNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Uom)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("UOM");
        });

        modelBuilder.Entity<ProdCtrl>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__ProdCtrl__9E5DDB1C43E1002F");

            entity.ToTable("ProdCtrl", tb => tb.HasTrigger("TG635_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.CStatus)
                .HasMaxLength(10)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("cStatus");
            entity.Property(e => e.CUom)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("cUOM");
            entity.Property(e => e.CUomqty)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("cUOMQty");
            entity.Property(e => e.ConsId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("ConsID");
            entity.Property(e => e.ConsQty).HasColumnType("numeric(18, 5)");
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.PUom)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("pUOM");
            entity.Property(e => e.PUomqty)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("pUOMQty");
            entity.Property(e => e.ProdId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("ProdID");
            entity.Property(e => e.ProdQty).HasColumnType("numeric(18, 5)");
        });

        modelBuilder.Entity<ProductMaster>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__ProductM__9E5DDB1C7A1D154F");

            entity.ToTable("ProductMaster", tb => tb.HasTrigger("TG5_P_Delete"));

            entity.HasIndex(e => e.ProductId, "ChkDupPIDMast").IsUnique();

            entity.HasIndex(e => e.ProductName, "ChkDupPdName").IsUnique();

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.AvrCost).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.CatId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("CatID");
            entity.Property(e => e.Colour)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Desc1)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.EngineNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryDate).HasColumnType("datetime");
            entity.Property(e => e.Hscode)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("HSCode");
            entity.Property(e => e.MakeYear).HasMaxLength(4);
            entity.Property(e => e.ModifyBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ModifyDate).HasColumnType("datetime");
            entity.Property(e => e.ProductId)
                .HasMaxLength(50)
                .HasColumnName("ProductID");
            entity.Property(e => e.ProductName).HasMaxLength(250);
            entity.Property(e => e.RegNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Reorder).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.SaleRate).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.SubCatId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("SubCatID");
            entity.Property(e => e.UnitRate).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Uom)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("UOM");
            entity.Property(e => e.Uomqty)
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("UOMQty");
            entity.Property(e => e.Variant).HasMaxLength(200);
            entity.Property(e => e.VatRate).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.WeightQty).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.WholeSalePcs).HasColumnType("numeric(18, 2)");
        });

        modelBuilder.Entity<ProductMasterCopy>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__ProductM__9E5DDB1C6CE315C2");

            entity.ToTable("ProductMaster_Copy", tb => tb.HasTrigger("TG457_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.AvrCost).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.CatId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("CatID");
            entity.Property(e => e.Desc1)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.EntBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntDate).HasColumnType("datetime");
            entity.Property(e => e.EntPc)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ModDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.ProductId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("ProductID");
            entity.Property(e => e.ProductName)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.SaleRate).HasColumnType("numeric(18, 3)");
            entity.Property(e => e.SubCatId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("SubCatID");
            entity.Property(e => e.UnitRate).HasColumnType("numeric(18, 3)");
            entity.Property(e => e.Uom)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("UOM");
            entity.Property(e => e.Uomqty)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("UOMQty");
            entity.Property(e => e.VatRate).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.WeightQty).HasColumnType("numeric(18, 3)");
            entity.Property(e => e.WholeSalePcs).HasColumnType("numeric(18, 3)");
        });

        modelBuilder.Entity<ProductUom>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__ProductU__9E5DDB1C7EE1CA6C");

            entity.ToTable("ProductUOM", tb => tb.HasTrigger("TG1524_P_Del"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.AvrCost).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Barcode)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.DiscAmt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryDate).HasColumnType("datetime");
            entity.Property(e => e.IsDel)
                .HasMaxLength(3)
                .IsUnicode(false);
            entity.Property(e => e.ModifyBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ModifyDate).HasColumnType("datetime");
            entity.Property(e => e.NetSale).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ProductId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("ProductID");
            entity.Property(e => e.UnitRate).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.UnitSale).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Uom)
                .HasMaxLength(50)
                .HasColumnName("UOM");
            entity.Property(e => e.Uomqty)
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("UOMQty");
            entity.Property(e => e.Ws)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("WS");
        });

        modelBuilder.Entity<ProjectMast>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__ProjectM__9E5DDB1C727BF387");

            entity.ToTable("ProjectMast", tb => tb.HasTrigger("TG1525_P_Del"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.ContactNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EndDate).HasColumnType("datetime");
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryDate).HasColumnType("datetime");
            entity.Property(e => e.EstimateCost).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Location).HasMaxLength(250);
            entity.Property(e => e.Manager)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.ModifyBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ModifyDate).HasColumnType("datetime");
            entity.Property(e => e.OtherInfo).HasMaxLength(250);
            entity.Property(e => e.ProjectId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("ProjectID");
            entity.Property(e => e.ProjectName)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.StartDate).HasColumnType("datetime");
        });

        modelBuilder.Entity<PurAddCostDetail>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__PurAddCo__9E5DDB1C4C413C06");

            entity.ToTable("PurAddCostDetail", tb => tb.HasTrigger("TG143_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.Amt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.DrLedId)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntDt)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.EntPc)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.IsDel)
                .HasMaxLength(1)
                .IsUnicode(false);
            entity.Property(e => e.ProductId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("ProductID");
            entity.Property(e => e.RefNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.TrDt).HasColumnType("datetime");
            entity.Property(e => e.TransNo)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<PurAddCostSum>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__PurAddCo__9E5DDB1C45943E77");

            entity.ToTable("PurAddCostSum", tb => tb.HasTrigger("TG142_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.Amt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.AmtFyc)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("AmtFYC");
            entity.Property(e => e.CrLedId)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CurrName)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.DocNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.DrLedId)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntDt)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.EntPc)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ExcRate).HasColumnType("numeric(18, 5)");
            entity.Property(e => e.IsDel)
                .HasMaxLength(1)
                .IsUnicode(false);
            entity.Property(e => e.RefNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Rmk)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.SubLedId)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.TrDt).HasColumnType("datetime");
            entity.Property(e => e.TransNo)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<PurAddLedMap>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__PurAddLe__9E5DDB1C51FA155C");

            entity.ToTable("PurAddLedMap", tb => tb.HasTrigger("TG144_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.EntBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntDt)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.EntPc)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.IsDel)
                .HasMaxLength(1)
                .IsUnicode(false);
            entity.Property(e => e.LedId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("LedID");
        });

        modelBuilder.Entity<PurchaseReturn>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__Purchase__9E5DDB1C28D80438");

            entity.ToTable("PurchaseReturn");

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.BillNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.BranchCode).HasMaxLength(50);
            entity.Property(e => e.ContraCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CreditorsAc)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.DiscAmt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.DiscAmtAvat)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("DiscAmtAVat");
            entity.Property(e => e.DiscPer).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.DiscPerAvat)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("DiscPerAVat");
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryDate).HasColumnType("datetime");
            entity.Property(e => e.GrandTotal).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ModifyBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ModifyDate).HasColumnType("datetime");
            entity.Property(e => e.MrnNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.NetReturn).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.NonTax).HasColumnType("numeric(18, 3)");
            entity.Property(e => e.PaymentType)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.PrintCopy).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.ReturnDate).HasColumnType("datetime");
            entity.Property(e => e.ReturnNo)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.SubTotal).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.SubTotalAdisc)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("SubTotalADisc");
            entity.Property(e => e.Taxable).HasColumnType("numeric(18, 3)");
            entity.Property(e => e.TotalVatAmt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.VendorId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("VendorID");
        });

        modelBuilder.Entity<PurchaseReturnDetail>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__Purchase__9E5DDB1C25077354");

            entity.ToTable("PurchaseReturnDetail");

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.BatchId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("BatchID");
            entity.Property(e => e.BillNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.BranchCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryDate).HasColumnType("datetime");
            entity.Property(e => e.ItemGtotal)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("ItemGTotal");
            entity.Property(e => e.ItemTotal).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ItemVatAmt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.LocId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("LocID");
            entity.Property(e => e.ModifyBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ModifyDate).HasColumnType("datetime");
            entity.Property(e => e.Mrp)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("MRP");
            entity.Property(e => e.PackCost).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.PackQty).HasColumnType("numeric(18, 0)");
            entity.Property(e => e.ProductId)
                .HasMaxLength(100)
                .HasColumnName("ProductID");
            entity.Property(e => e.ReturnDate).HasColumnType("datetime");
            entity.Property(e => e.ReturnNo)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.ReturnQty).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.UnitRate).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.UnitSale).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Uom)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("UOM");
        });

        modelBuilder.Entity<RptTempTable>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__rptTempT__9E5DDB1C4BB72C21");

            entity.ToTable("rptTempTable");

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.Cr).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Dr).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Gname)
                .HasMaxLength(250)
                .IsUnicode(false)
                .HasColumnName("GName");
            entity.Property(e => e.L0)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.L1).HasMaxLength(100);
            entity.Property(e => e.L2)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.L3)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.L4)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Narration)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.TransDate).HasColumnType("datetime");
            entity.Property(e => e.VoucherRef).HasMaxLength(100);
        });

        modelBuilder.Entity<SAccessLevel>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__sAccessL__9E5DDB1C05AEC38C");

            entity.ToTable("sAccessLevel");

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.Child)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ChildMenu)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Parent)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ParentMenu)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<SAccessTran>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__sAccessT__9E5DDB1C097F5470");

            entity.ToTable("sAccessTrans");

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.Access)
                .HasMaxLength(10)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.MenuName)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<SDetail>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("sDetails", tb => tb.HasTrigger("TG1528_P_Del"));

            entity.Property(e => e.Computer)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.LogDate).HasColumnType("datetime");
            entity.Property(e => e.LogTime)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)");
            entity.Property(e => e.UserName)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<SMenuLevel>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__sMenuLev__9E5DDB1C56D3D912");

            entity.ToTable("sMenuLevel", tb => tb.HasTrigger("TG1529_P_Del"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.Child)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ChildMenu)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Parent)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ParentMenu)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<SMenuTransaction>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__sMenuTra__9E5DDB1C5AA469F6");

            entity.ToTable("sMenuTransactions", tb => tb.HasTrigger("TG1530_P_Del"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.Access)
                .HasMaxLength(10)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.MenuName)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.UserName)
                .HasMaxLength(20)
                .IsUnicode(false);
        });

        modelBuilder.Entity<SSy>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("sSys", tb => tb.HasTrigger("TG8_P_Delete"));

            entity.Property(e => e.Iiiid)
                .HasColumnType("datetime")
                .HasColumnName("IIIID");
            entity.Property(e => e.SkkSys)
                .HasMaxLength(50)
                .HasColumnName("skkSys");
            entity.Property(e => e.TransId)
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
        });

        modelBuilder.Entity<SalesArea>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__SalesAre__9E5DDB1C61716316");

            entity.ToTable("SalesArea");

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.Acc)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Acn)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.EditedBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EditedDate).HasColumnType("datetime");
            entity.Property(e => e.EditedSys)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EnteredBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EnteredDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.EnteredSys)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<ServiceI>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__Service___9E5DDB1C03FB8544");

            entity.ToTable("Service_I");

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.Description)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.EnteredBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EnteredDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.EnteredSys)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Hscode)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("HSCode");
            entity.Property(e => e.Itemcode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Rt).HasColumnType("numeric(18, 2)");
        });

        modelBuilder.Entity<StkLoc>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__StkLoc__9E5DDB1C2062B9C8");

            entity.ToTable("StkLoc", tb => tb.HasTrigger("TG136_P_Delete"));

            entity.HasIndex(e => e.LocId, "ChkDupLoc_Code").IsUnique();

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.BrNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.EntPc)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("EntPC");
            entity.Property(e => e.IsDel)
                .HasMaxLength(1)
                .IsUnicode(false);
            entity.Property(e => e.LocId)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.LocName)
                .HasMaxLength(250)
                .IsUnicode(false);
        });

        modelBuilder.Entity<StockAdj7677>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__StockAdj__9E5DDB1C54817C4C");

            entity.ToTable("StockAdj7677", tb => tb.HasTrigger("TG1531_P_Del"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.AdjustQty).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.BookQty).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.EntryBy).HasMaxLength(100);
            entity.Property(e => e.EntryDate).HasColumnType("datetime");
            entity.Property(e => e.ProductId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("ProductID");
            entity.Property(e => e.Remarks)
                .HasMaxLength(250)
                .IsUnicode(false);
        });

        modelBuilder.Entity<StockAdj7778>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__StockAdj__9E5DDB1C6A70BD6B");

            entity.ToTable("StockAdj7778", tb => tb.HasTrigger("TG1532_P_Del"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.AdjAmt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.AdjustQty).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.BookQty).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.EntryBy).HasMaxLength(100);
            entity.Property(e => e.EntryDate).HasColumnType("datetime");
            entity.Property(e => e.ProductId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("ProductID");
            entity.Property(e => e.Remarks)
                .HasMaxLength(250)
                .IsUnicode(false);
        });

        modelBuilder.Entity<StockAdj7879>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__StockAdj__9E5DDB1C72D0F942");

            entity.ToTable("StockAdj7879");

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.AdjAmt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.AdjustQty).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.BookQty).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.EntryBy).HasMaxLength(100);
            entity.Property(e => e.EntryDate).HasColumnType("datetime");
            entity.Property(e => e.ProductId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("ProductID");
            entity.Property(e => e.Remarks)
                .HasMaxLength(250)
                .IsUnicode(false);
        });

        modelBuilder.Entity<StockAdj7980>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__StockAdj__9E5DDB1C1CC7330E");

            entity.ToTable("StockAdj7980");

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.AdjAmt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.AdjustQty).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.BookQty).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.EntryBy).HasMaxLength(100);
            entity.Property(e => e.EntryDate).HasColumnType("datetime");
            entity.Property(e => e.ProductId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("ProductID");
            entity.Property(e => e.Remarks)
                .HasMaxLength(250)
                .IsUnicode(false);
        });

        modelBuilder.Entity<StockAdj8081>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__StockAdj__9E5DDB1C396371BC");

            entity.ToTable("StockAdj8081");

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.AdjAmt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.AdjustQty).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.BookQty).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.EntryBy).HasMaxLength(100);
            entity.Property(e => e.EntryDate).HasColumnType("datetime");
            entity.Property(e => e.ProductId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("ProductID");
            entity.Property(e => e.Remarks)
                .HasMaxLength(250)
                .IsUnicode(false);
        });

        modelBuilder.Entity<StockAdj8182>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__StockAdj__9E5DDB1C5F54107A");

            entity.ToTable("StockAdj8182");

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.AdjAmt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.AdjustQty).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.BookQty).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.EntryBy).HasMaxLength(100);
            entity.Property(e => e.EntryDate).HasColumnType("datetime");
            entity.Property(e => e.ProductId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("ProductID");
            entity.Property(e => e.Remarks)
                .HasMaxLength(250)
                .IsUnicode(false);
        });

        modelBuilder.Entity<StrSm>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__StrSms__9E5DDB1C2D32A501");

            entity.ToTable(tb => tb.HasTrigger("TG604_P_Del"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.CAct)
                .HasMaxLength(250)
                .HasColumnName("cAct");
            entity.Property(e => e.DelDt).HasColumnType("datetime");
            entity.Property(e => e.ImpDt)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.IsDel)
                .HasMaxLength(5)
                .IsUnicode(false);
            entity.Property(e => e.SSms).HasColumnName("sSms");
            entity.Property(e => e.TransNo)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<StrSql>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__StrSQL__9E5DDB1C31F75A1E");

            entity.ToTable("StrSQL", tb => tb.HasTrigger("TG605_P_Del"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.ExcDt).HasColumnType("datetime");
            entity.Property(e => e.ImpDt)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.IsDel)
                .HasMaxLength(5)
                .IsUnicode(false);
            entity.Property(e => e.IsExc)
                .HasMaxLength(5)
                .IsUnicode(false);
            entity.Property(e => e.SqlCmd).HasColumnName("SQlCmd");
            entity.Property(e => e.TransNo)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<SubCategoryMast>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__SubCateg__9E5DDB1C3AF6B473");

            entity.ToTable("SubCategoryMast", tb => tb.HasTrigger("TG3_P_Delete"));

            entity.HasIndex(e => e.SubCatId, "ChkDupSubCategory").IsUnique();

            entity.HasIndex(e => e.SubCatName, "ChkDupSubCategoryName").IsUnique();

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.CatId)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryDate).HasColumnType("datetime");
            entity.Property(e => e.ModifyBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ModifyDate).HasColumnType("datetime");
            entity.Property(e => e.SubCatId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("SubCatID");
            entity.Property(e => e.SubCatName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.VatRate).HasColumnType("numeric(18, 2)");
        });

        modelBuilder.Entity<SubLedMappingMast>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__SubLedMa__9E5DDB1C3A228BCB");

            entity.ToTable("SubLedMappingMast", tb => tb.HasTrigger("TG140_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.EntBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntDt)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.EntPc)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.IsDel)
                .HasMaxLength(1)
                .IsUnicode(false);
            entity.Property(e => e.LedId)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("LedID");
            entity.Property(e => e.SubLedId)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<SubLedMast>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__SubLedMa__9E5DDB1C3469B275");

            entity.ToTable("SubLedMast", tb => tb.HasTrigger("TG139_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.Add1)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.EntBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntDt)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.EntPc)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.IsDel)
                .HasMaxLength(1)
                .IsUnicode(false);
            entity.Property(e => e.LedName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Mob).HasMaxLength(20);
            entity.Property(e => e.PanNo)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.Remarks)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.SubLedId)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<TempVarchar>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__TempVarc__9E5DDB1C4F87BD05");

            entity.ToTable("TempVarchar");

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.PackCost).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.ProductId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("ProductID");
            entity.Property(e => e.UnitRate).HasColumnType("numeric(18, 2)");
        });

        modelBuilder.Entity<Ucnt>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__UCnt__9E5DDB1C286DEFE4");

            entity.ToTable("UCnt", tb => tb.HasTrigger("TG603_P_Del"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.Ludt)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime")
                .HasColumnName("LUDt");
            entity.Property(e => e.MacId)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.PcName)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<UomMast>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__UomMast__9E5DDB1C3FBB6990");

            entity.ToTable("UomMast", tb => tb.HasTrigger("TG4_P_Delete"));

            entity.HasIndex(e => e.UomDesc, "ChkDupUomMat").IsUnique();

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryDate).HasColumnType("datetime");
            entity.Property(e => e.ModifyBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ModifyDate).HasColumnType("datetime");
            entity.Property(e => e.UomDesc)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.UomQty).HasColumnType("numeric(18, 5)");
        });

        modelBuilder.Entity<UploadExcelSale>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__UploadEx__9E5DDB1C729BEF18");

            entity.ToTable(tb => tb.HasTrigger("TG814_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.Add1)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.CusId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("CusID");
            entity.Property(e => e.CusN)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.EmailId)
                .HasMaxLength(250)
                .HasColumnName("EmailID");
            entity.Property(e => e.EntBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.EntPc)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("EntPC");
            entity.Property(e => e.ExcelPath).HasMaxLength(500);
            entity.Property(e => e.Fare).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.Gt).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.InvNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.IsDel)
                .HasMaxLength(1)
                .IsUnicode(false);
            entity.Property(e => e.ItemDesc)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.NonTax).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.OthChr).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.PanNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Qty).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.TSales)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("tSales");
            entity.Property(e => e.Taxable).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.TransDt).HasColumnType("datetime");
            entity.Property(e => e.VRef)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("vRef");
            entity.Property(e => e.VatA).HasColumnType("numeric(18, 2)");
            entity.Property(e => e.WeekN)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<UserLog>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__User_Log__9E5DDB1C064DE20A");

            entity.ToTable("User_Log", tb => tb.HasTrigger("TG24_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.EditedBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EditedDate).HasColumnType("datetime");
            entity.Property(e => e.EnteredBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EnteredDate).HasColumnType("datetime");
            entity.Property(e => e.Fname)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("FName");
            entity.Property(e => e.Iaction)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("IAction");
            entity.Property(e => e.MyDesc).HasMaxLength(500);
            entity.Property(e => e.TransDate).HasColumnType("datetime");
            entity.Property(e => e.TransNo)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<VatLedMapping>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__VatLedMa__9E5DDB1C2CC890AD");

            entity.ToTable("VatLedMapping", tb => tb.HasTrigger("TG138_P_Delete"));

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.EntBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntDt)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.IsDel)
                .HasMaxLength(1)
                .IsUnicode(false);
            entity.Property(e => e.TransName)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.TransType)
                .HasMaxLength(1)
                .IsUnicode(false);
            entity.Property(e => e.VatLedId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("VatLedID");
        });

        modelBuilder.Entity<VendorMast>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__VendorMa__9E5DDB1C316D4A39");

            entity.ToTable("VendorMast", tb => tb.HasTrigger("TG7_P_Delete"));

            entity.HasIndex(e => e.VendId, "ChkDupVendMast").IsUnique();

            entity.HasIndex(e => e.VendName, "ChkDupVendName").IsUnique();

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.Add1)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Bgamt)
                .HasColumnType("numeric(18, 2)")
                .HasColumnName("BGAmt");
            entity.Property(e => e.CityName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.ContactName).HasMaxLength(250);
            entity.Property(e => e.EmailId)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("EmailID");
            entity.Property(e => e.EntryBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntryDate).HasColumnType("datetime");
            entity.Property(e => e.MobileNo)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.ModifyBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ModifyDate).HasColumnType("datetime");
            entity.Property(e => e.PanNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.PhoneNo)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Remarks).HasMaxLength(250);
            entity.Property(e => e.VendId)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.VendName)
                .HasMaxLength(250)
                .IsUnicode(false);
        });

        modelBuilder.Entity<VoidInv>(entity =>
        {
            entity.HasKey(e => e.TransId).HasName("PK__VoidInv__9E5DDB1C0FA2421A");

            entity.ToTable("VoidInv", tb => tb.HasTrigger("TG508_P_Delete"));

            entity.HasIndex(e => e.InvNo, "ChkDupInv_No").IsUnique();

            entity.HasIndex(e => e.TransNo, "ChkDupTrans_No").IsUnique();

            entity.Property(e => e.TransId)
                .ValueGeneratedOnAdd()
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("TransID");
            entity.Property(e => e.BillNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.BranchCode)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntBy)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EntDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.EntPc)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("EntPC");
            entity.Property(e => e.InvNo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.MacId)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("MacID");
            entity.Property(e => e.Reason)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.TransDate).HasColumnType("datetime");
            entity.Property(e => e.TransNo)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}

public class Con1
{
    internal object? TransId;
    internal object? BatchId;
    internal object? BranchCode;
    internal object? Uom;
    internal object? TransNo;
    internal object? TransDate;
    internal object? ProdId;
    internal object? ConsId;
    internal object? ConsQty;
    internal object? PackRate;
    internal object? LocId;
    internal object? PackQty;
    internal object? EntryBy;
    internal object? EntryDate;
    internal object? ItemTotal;
}